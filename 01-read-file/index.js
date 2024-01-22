const fs = require('fs');
const path = require('path');
const fp = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(fp, 'utf-8');
let fd = '';
readStream
  .on('data', (c) => fd += c)
  .on('end', () => console.log(fd))
  .on('error', (err) => console.log(`Error: ${err.message}`));