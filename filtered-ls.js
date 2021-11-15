const fs = require("fs");
const path = require("path");

// fs.readdir(process.argv[2], (err, list) => {
//   list.forEach((file) => {
//     if (path.extname(file) === "." + process.argv[3]) console.log(file);
//   });
// });

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === "." + process.argv[3]) console.log(file);
  });
});
