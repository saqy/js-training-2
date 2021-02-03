/////////////////////////////////////////problem 5////////////////////////////////////////////

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.


var inputArray=[-3,6,-2,5,-6,3];
var nestarray=[];
var max=0;
function adjacentElementsProduct(arrayArgument){
  let product,secondElement,firstElement;
  for(let i=0;i<arrayArgument.length-1;i++){
    firstElement=arrayArgument[i];
    secondElement=arrayArgument[i+1];
    product=(firstElement*secondElement);
      nestarray.push(product);
  }
for(let i=0;i<nestarray.length-1;i++){
  if(nestarray[i]>nestarray[i+1]){
   max=nestarray[i];
}
}
console.log("Maximum product is:"+max);
}

adjacentElementsProduct(inputArray);

