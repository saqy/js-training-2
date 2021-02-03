/////////////////////////////problem 2////////////////////////////////////////

// Write a program to combine two arrays
// firstInput = [ 1, 2, 3 ]
// secondInput = [ 4, 5, 6 ]
// Output: = [ 1, 2, 3, 4, 5, 6]

var firstInputArray=[1,2,3];
var secondInputArray=[4,5,6,5,0];
var resultArray=firstInputArray;
for(let i=0;i<secondInputArray.length;i++){
resultArray.push(secondInputArray[i]);
}
console.log(resultArray);