const myModule = require("./mymodule");
const file = process.argv[2];
const extention = process.argv[3];

myModule(file, extention, (err, filtredList) => {
  if (err) console.log(err);
  filtredList.forEach((file) => {
    console.log(file);
  });
});
