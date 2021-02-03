/////////////////////////////////////problem 1/////////////////////////////////

// Write a program to reverse an array or string using loop
// input: [ 1, 2, 3 ]
// output: [ 3, 2, 1 ]

var inputArray=[1,2,3,60,7,5,8];
var resultArray=[];
for (var i = inputArray.length - 1; i >= 0; i--) {
  resultArray.push(inputArray[i]);
}
console.log(resultArray);
