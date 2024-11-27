import fs from 'fs/promises';
import fg from 'fast-glob';
import path from 'path';

async function build() {
  // Find all SVG files in out directories
  const files = await fg('out/**/*.svg');

  // Create export statements for each file
  const exports = files.map(file => {
    const importPath = './' + file;
    const name = path
      .basename(file, '.svg')
      .replace(/[^a-zA-Z0-9]/g, ' ') // Replace non-alphanumeric chars with space
      .replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) // Capitalize first letter after space
      .replace(/\s/g, ''); // Remove spaces

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    return `export { default as ${capitalizedName} } from '${importPath}';`;
  });

  // Create index.js with all exports
  await fs.writeFile('index.js', exports.join('\n'));

  // Create TypeScript declaration file
  const typeDefinitions = [
    '/// <reference types="react" />',
    'import { SVGProps } from "react";',
    '',
    'declare module "@brand-estonia/icons" {',
    ...files.map(file => {
      const name = path
      .basename(file, '.svg')
      .replace(/[^a-zA-Z0-9]/g, ' ') // Replace non-alphanumeric chars with space
      .replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) // Capitalize first letter after space
      .replace(/\s/g, ''); // Remove spaces
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      return `  export const ${capitalizedName}: (props: SVGProps<SVGSVGElement>) => JSX.Element;`
    }),
    '}',
    ''
  ].join('\n');

  await fs.writeFile('index.d.ts', typeDefinitions);

  console.log(`Generated ${exports.length} icon exports`);
}

build().catch(console.error);
