const args = process.argv.slice(2);

for (const argument of args) {
  if (!Number.isNaN(argument)  && argument >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, argument);
  }
}