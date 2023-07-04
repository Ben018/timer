// timer that will beep after specified amount of seconds
const input = process.argv.splice(2)

for (const alarm of input) {
  if (alarm > 0) {
    setTimeout(() => {
      process.stdout.write('BEEP\n');
    }, alarm * 1000);
  }

};