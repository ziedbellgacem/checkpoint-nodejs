const argument = process.argv;
let stdout = 0;
for (let i = 2; i < argument.length; i++) {
  stdout += Number(process.argv[i]);
}

console.log(stdout);
