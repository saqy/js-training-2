
////////////////////////////////////////////////////////////problem 11///////////////////////////////////////////////////

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
//  Print the decimal value of each fraction on a new line with places after the decimal.



let reducer =arr.reduce(function(accumulator,currentvalue){
    if(currentvalue<0){
     negative++;
    }
    if(currentvalue>0){
     positive++;
    }
    if(currentvalue===0){
     zero++;
    }
  },(positive=0,negative=0,zero=0))
  
  positive=(positive/6);
  negative=(negative/6);
  zero=(zero/6);
  console.log("proportion of positive values:"+positive);
  console.log("proportion of negative values:"+negative);
  console.log("proportion of zero values:"+zero);
  