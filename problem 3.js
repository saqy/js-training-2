/////////////////////////////////////problem 3//////////////////////////////////////

//Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input: [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]


var inputArray=[1,2,3,4,5,6,7];
var resultArray=[];
var k=4;
if(k<inputArray.length){
for (var i = inputArray.length - 1; i >= inputArray.length-k; i--) {
 console.log(i);
  resultArray =inputArray.pop();
  inputArray.unshift(resultArray);
}
console.log(inputArray);

}else{
  console.log("Enter lesser value of k. ");
}