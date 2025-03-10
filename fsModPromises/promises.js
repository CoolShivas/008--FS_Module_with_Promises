const fs = require("fs");
const path = require('path');


const files = __dirname;

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

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



// fs.promises
//   .readFile(files)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// // // // Here, we are getting the Output on Terminal as :
// // // // [ 'promises.js', 'theory.js' ]



/**
 *
 * Why .then() and .catch() ?
 *
 * // ? .then() :- Ensures clear chaining of multiple asynchronous operations.
 *
 * // ? .catch() :- Centralizes error handling, making it easy to debug and manage failures.
 *
 */

//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */




// fs.promises
//   .writeFile(filePath, "Creating the file using fs Promises.", "utf-8")
//   .then(() => {
//     console.log("File Created Successfully!");
//   })
//   .catch((err) => {
//     console.error(err);
//   });


// // // // Here, we are getting the Output on Terminal as :
// // // // File Created Successfully!
// // // // Thereofore, the "fsPromises.txt" file is created with content. 

/**
 *
 * Create (Write a File) :- fs.promise.writeFile
 * Creates or overwrites a file with specified content.
 * The writeFile() method writes data to a file asynchronoulsy.
 * If the file does not exist, it is created.
 * If it exists, its content is replaced.
 *
 *
 * // ! syntax :- fs.promises.writeFile(path, data, options).then().catch();
 * // ? path :- Path to the file.
 * // ? data :- Content to write.
 * // ? options : Encoding ('utf8'), flags, etc. (optional).
 *
 */

//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */





// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error reading file :",err);
//   });


// // // // Here, we are getting the Output on Terminal as :-
// // // // Creating the file using fs Promises.

/**
 *
 * Read (read a file) :- readFile()
 * The readFile() method reads data from a file.
 * It can return the data as a Buffer or string based on the encoding provided.
 *
 *
 * // ! syntax :- fs.promises.readFile(path, options).then(data => ...).catch(err => ...);
 * // ? path : - Path to the file.
 * // ? options :- Encoding ('utf8') or no encoding for binary data
 *
 */

//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */




// fs.promises
//   .appendFile(
//     filePath,
//     "\nThis is the second line. By using the backward slash with n.",
//     "utf-8"
//   )
//   .then(() => {
//     console.log("File Updated Successfully!");
//   })
//   .catch((err) => {
//     console.log("Error updating file :", err);
//   });


  // // // // Here, we are getting the Output on Terminal as :-
  // // // // File Updated Successfully!
  // // // // Therefore, we are able to see the new updated line on the file named as "fsPromises.txt".

/**
 *
 * Update (append content to a file) :- appendFile()
 * Adds content to the end of a file.
 * The appendFile() method adds content without overwriting the existing data.
 *
 *
 * // ! syntax :- fs.promises.appendFile(path, data, options).then().catch();
 * // ? path :- Path to the file.
 * // ? data :- Content to append.
 * // ? options :- Encoding ('utf8') or no encoding for binary data.
 *
 */

//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */





fs.promises
  .unlink(filePath)
  .then(() => {
    console.log("File Deleted Successfully!");
  })
  .catch((err) => {
    console.log("Error deleting file :", err);
  });


  // // // // Here, we are getting the Output on Terminal as :-
  // // // // File Deleted Successfully!
  // // // // Therefore,  "fsPromises.txt" deleted now.


/**
 * 
 * Delete (remove a file) : unlink()
 * Delete a file from the filesystem.
 * The unlink() method removes the specified file asynchronously.
 * 
 * 
 * // ! syntax :- fs.promises.unlink(path).then().catch();
 * // ? path :- Path to the file.
 * 
 * 
 */


//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */