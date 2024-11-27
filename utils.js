export function convertToPascalCase(str) {
  const name = str
  .replace(/[^a-zA-Z0-9]/g, ' ') // Replace non-alphanumeric chars with space
  .replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) // Capitalize first letter after space
  .replace(/\s/g, ''); // Remove spaces

 return str.charAt(0).toUpperCase() + name.slice(1);
}
