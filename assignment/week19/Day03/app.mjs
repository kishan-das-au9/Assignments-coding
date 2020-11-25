// Used module based approach to split code into different files to keep code organized and maintainable.
// Using mjs file so nodeJs can distinguish between common js file and module based js file
// Triggering support for mjs file using `type:"module` in package.json
// Enter command `node --experimental-modules app.mjs` in terminal to run app.mjs
// Or click on start in Npm scripts section in VsCode

// Importing variable 
import { yogi } from "./fil.mjs"

// Function to just print the array
function printArr() {
  console.log(yogi)
}

// Calling function
printArr();