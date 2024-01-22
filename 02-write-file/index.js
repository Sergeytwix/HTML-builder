const fs = require('fs');
const path = require('path');
const { stdin: input, stdout: output } = require('process');
const readline = require('readline');
const fn = 'text.txt';
const fp = path.join(__dirname, fn);
const writeStream = fs.createWriteStream(fp);
writeStream.on('error', (err) => console.error(`Error: ${err.message}`));
const readStream = readline.createInterface({ input, output });

console.log('Hello!\n' + 
'Input something, please\n' +
'Press Enter if you want to save your text\n' +
'Press Ctrl+C or enter "exit" to finish\n');

readStream
  .on('error', (err) => console.error(`Error: ${err.message}`))
  .on('close', () => {
    console.log(`\nGood bye!! Your data has been written to ${fn}`);
  })
  .on('line' || 'SIGINT', (input) => {
    if (input.toString().trim().toLowerCase() === 'exit') {
      return readStream.close();
    } else {
      writeStream.write(`${input}\n`);
    }
  });