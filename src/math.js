//export
var foo = 30;

export const sum = (a,b)=> a+b;
export const numbers = [5, 10, 15, 20, 25, foo];

const product = (a,b) => a*b;
export default product;

/*
another way to export 
const sum = (a,b)=> a+b;
const numbers = [5, 10, 15, 20, 25, foo];
export{ sum, numbers};
*/

//import
/* Two ways of importing named objects from a module 
1.Combine two into one
2.import separately
*/

