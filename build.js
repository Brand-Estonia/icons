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

  // Create types file with icon names
  const iconTypes = [
    'export type IconName =',
    components
      .map(({ componentName }) => `  | '${componentName}'`)
      .join('\n'),
    ';',
    'export default IconName;',
    ''
  ].join('\n');

  await fs.writeFile('types.ts', iconTypes);

  // Create index.js with all exports
  const indexContent = [
    // Export all components
    ...components.map(({ componentName, componentPath }) => {
      const relativePath = './' + componentPath;
      return `exports.${componentName} = require('${relativePath}');`;
    })
  ].join('\n');

  await fs.writeFile('index.js', indexContent);

  // Create TypeScript declaration file
  const typeDefinitions = [
    '/// <reference types="react" />',
    'import { SVGProps } from "react";',
    '',
    // Export IconName type directly
    'export type IconName =',
    ...components.map(({ componentName }) => `  | '${componentName}'`),
    '',
    // Export component declarations
    ...components.map(({ componentName }) =>
      `export const ${componentName}: (props: SVGProps<SVGSVGElement>) => JSX.Element;`
    ),
    ''
  ].join('\n');

  await fs.writeFile('index.d.ts', typeDefinitions);

  // write the list of components to Readme end
  const readmeContent = components
    .map(({ componentName }) => `- ${componentName}`)
    .join('\n');

  await fs.appendFile('README.md', readmeContent);

  console.log(`Generated ${components.length} icon components with type definitions`);
}

build().catch(console.error);
