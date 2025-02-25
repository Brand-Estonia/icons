
// update packages.json version number
const packageJson = require('./package.json');
const version = packageJson.version.split('.');
version[2] = parseInt(version[2]) + 1;
packageJson.version = version.join('.');
console.log(`Updated package.json version to ${packageJson.version}`);

await fs.writeFile('package.json', JSON.stringify(packageJson, null, 2));

// Run the publish function
