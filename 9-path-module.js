const path = require('path');

console.log(path.sep)

const filePath  = path.join('/content','subholder','text.txt')
console.log(filePath)

const base  = path.basename(filePath)
console.log(base)

// __dirname  - path to current directory
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)