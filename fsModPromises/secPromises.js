/**
 * 
 * * * Instead of using fs.promise. We can directly add or merge the promise in require.
 * * * Such as :-               const fs = require("fs/promises");
 * * * Previously used as :-    const fs = require("fs");
 * 
 */


const fs = require("fs/promises");
const path = require('path');

const files = __dirname;


// fs.readdir(files)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//   // // // // Here, we are getting the Output on Terminal as :-
//   // // // // [ 'promises.js', 'secPromises.js', 'theory.js' ]



  
//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */


const fileName = "fsSecondPro.txt";
const filePath = path.join(__dirname, fileName);



// fs.writeFile(
//     filePath,
//     "Formation of Second Promise with fs/promise for directly use.",
//     "utf-8"
//   )
//     .then(() => {
//       console.log("Created File Successfully!");
//     })
//     .catch((err) => {
//       console.log("Error in creating file", err);
//     });


//     // // // // Here, we are getting the Output on Terminal as :-
//     // // // // Created File Successfully!
    



//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */



// fs.readFile(filePath, "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error in reading the file.", err);
//   });

//    // // // // Here, we are getting the Output on Terminal as :-
//   // // // //  Formation of Second Promise with fs/promise for directly use.

  

//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */




// fs.appendFile(filePath, "\nSecond line is added in the file.", "utf-8")
//   .then(() => {
//     console.log("Updated File Successfully!");
//   })
//   .catch((err) => {
//     console.log("Error in updating a file", err);
//   });


  
//    // // // // Here, we are getting the Output on Terminal as :-
//   // // // //  Updated File Successfully!




  
//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */





fs.unlink(filePath)
  .then(() => {
    console.log("Deleted File Successfully!");
  })
  .catch((err) => {
    console.log("Error in deleting file", err);
  });


  
   // // // // Here, we are getting the Output on Terminal as :-
  // // // //  Deleted File Successfully!



  
//////******************************************************************************************** */
////------------------------------------------------------------------------------------------------
//////******************************************************************************************** */

