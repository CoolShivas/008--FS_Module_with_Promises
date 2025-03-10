const fs = require("fs");

const files = __dirname;

// const readDirFiles = fs.promises
//   .readdir(files)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// console.log(readDirFiles);

// // // // // Here, we are getting the Output on Terminal as :
// // // // // Promise { <pending> }
// // // // // [ 'promises.js', 'theory.js' ]
// // // // // Therefore, it is showing that how many files are there in your directory i.e., the folder names as fsModPromises and its files. So, it is showing the file promise.js and theory.js.


///////-----------------------------------------------------------------------------------------------


// // // // To get rid of Promise { <pending> }. 
// // // // It is coming because of using console i.e., (console.log(readDirFiles);).



fs.promises
  .readFile(files)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });


// // // // Here, we are getting the Output on Terminal as :
// // // // [ 'promises.js', 'theory.js' ]



