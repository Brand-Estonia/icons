import fs from 'fs/promises';
import fg from 'fast-glob';
import path from 'path';
import { transform } from '@svgr/core';

export function convertToPascalCase(str) {
  const name = str
  .replace(/[^a-zA-Z0-9]/g, ' ') // Replace non-alphanumeric chars with space
  .replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) // Capitalize first letter after space
  .replace(/\s/g, ''); // Remove spaces

 return str.charAt(0).toUpperCase() + name.slice(1);
}

async function build() {
  // Find all SVG files in out directories
  const files = await fg('out/**/*.svg');

  const components = await Promise.all(
    files.map(async (file) => {
      const svg = await fs.readFile(file, 'utf8');
      const componentName = convertToPascalCase(path
        .basename(file, '.svg'))

      // Convert SVG to React component
      const component = await transform(
        svg,
        {
          plugins: ['@svgr/plugin-jsx'],
          typescript: false,
          dimensions: true,
          ref: true,
          icon: true,
          exportType: 'named',
        },
        { componentName }
      );

      // Create the component file
      const componentPath = `out/${componentName}.js`;
      await fs.writeFile(componentPath, component);

      return { componentName, componentPath };
    })
  );

  // Create index.js with all exports
  const exports = components.map(({ componentName, componentPath }) => {
    const relativePath = './' + componentPath;
    return `export { ${componentName} } from '${relativePath}';`;
  });

  await fs.writeFile('index.js', exports.join('\n'));

  // Create TypeScript declaration file
  const typeDefinitions = [
    '/// <reference types="react" />',
    'import { SVGProps } from "react";',
    '',
    'declare module "@your-scope/icons" {',
    ...components.map(({ componentName }) =>
      `  export const ${componentName}: (props: SVGProps<SVGSVGElement>) => JSX.Element;`
    ),
    '}',
    ''
  ].join('\n');

  await fs.writeFile('index.d.ts', typeDefinitions);

  console.log(`Generated ${components.length} icon components with type definitions`);
}

build().catch(console.error);
