// Working with os module.

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory + '\n');

// Template String of ES6
console.log(`Using Template String of ES6: `);
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
// Example of using path module.

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);