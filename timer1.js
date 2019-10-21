const args = process.argv.slice(2);

for (const argument of args) {
  if (!Number.isNaN(argument)  && argument >= 0) {
    setTimeout(() => {
      console.log(argument);
      process.stdout.write('\x07');
    }, argument);
  }
}