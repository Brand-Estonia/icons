const fs = require('fs/promises');
const fg = require('fast-glob');
const path = require('path');
const { transform } = require('@svgr/core');
const babel = require('@babel/core');

function convertToPascalCase(str) {
  const name = str
    .replace(/[^a-zA-Z0-9]/g, ' ') // Replace non-alphanumeric chars with space
    .replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) // Capitalize first letter after space
    .replace(/\s/g, ''); // Remove spaces

  return str.charAt(0).toUpperCase() + name.slice(1);
}

async function build() {
  // Find all SVG files in out directories
  const files = await fg('input/**/*.svg');

  const components = await Promise.all(
    files.map(async (file) => {
      const svg = await fs.readFile(file, 'utf8');
      const componentName = convertToPascalCase(path
        .basename(file, '.svg'))

      // Convert SVG to React component
      let jsCode = await transform(
        svg,
        {
          plugins: ['@svgr/plugin-jsx'],
          typescript: false,
          dimensions: true,
          ref: true,
          icon: true,
          // convert colors to currentColor
          replaceAttrValues: {
            '#000': 'currentColor',
            'black': 'currentColor',
            '#000000': 'currentColor',
            '#0000F0': 'currentColor',
          },
          template: ({ componentName, jsx }, { tpl }) => {
            return tpl`
  const React = require('react');
  const { forwardRef } = require('react');

  const ${componentName} = (props, ref) => ${jsx};

  module.exports = forwardRef(${componentName});
              `;
          }
        },
        { componentName }
      );

      // Transform JSX to plain JavaScript
      const babelResult = babel.transformSync(jsCode, {
        presets: [
          ['@babel/preset-react', {
            runtime: 'classic',
            development: false
          }]
        ]
      });
      jsCode = babelResult.code;

      // Create the component file
      const componentPath = `out/${componentName}.js`;
      await fs.writeFile(componentPath, jsCode);

      return { componentName, componentPath };
    })
  );

  // Create index.js with all exports
  const indexContent = components
    .map(({ componentName, componentPath }) => {
      // Use relative path from index.js to component
      const relativePath = './' + componentPath;
      return `exports.${componentName} = require('${relativePath}');`;
    })
    .join('\n');

  await fs.writeFile('index.js', indexContent);

  // Create TypeScript declaration file
  const typeDefinitions = [
    '/// <reference types="react" />',
    'import { SVGProps } from "react";',
    '',
    'declare module "@brand-estonia/icons" {',
    ...components.map(({ componentName }) =>
      `  export const ${componentName}: (props: SVGProps<SVGSVGElement>) => JSX.Element;`
    ),
    '}',
    ''
  ].join('\n');

  await fs.writeFile('index.d.ts', typeDefinitions);
  // write the list of components to Readme end
  const readmeContent = components
    .map(({ componentName }) => `- ${componentName}`)
    .join('\n');

  await fs.appendFile('README.md', readmeContent);

  // update packages.json version number
  const packageJson = require('./package.json');
  const version = packageJson.version.split('.');
  version[2] = parseInt(version[2]) + 1;
  packageJson.version = version.join('.');
  await fs.writeFile('package.json', JSON.stringify(packageJson, null, 2));

  console.log(`Generated ${components.length} icon components with type definitions`);
}

build().catch(console.error);
