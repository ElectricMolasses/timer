const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const numbers = {
  '\u0031': 1,
  '\u0032': 2,
  '\u0033': 3,
  '\u0034': 4,
  '\u0035': 5,
  '\u0036': 6,
  '\u0037': 7,
  '\u0038': 8,
  '\u0039': 9
};

stdin.on('data', (key) => {

  if (key === '\u0062') {
    process.stdout.write('\x07');
  } else if (numbers.hasOwnProperty(key)) {
    console.log(`setting timer for ${numbers[key]} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numbers[key] * 1000);
  }
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});