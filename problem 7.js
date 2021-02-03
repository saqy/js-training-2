/////////////////////////////////////////////Problem 7////////////////////////////////////////////////////////

// Given the string, check if it is a palindrome.
// Example
// For inputString = "aabaa", the output should be = true; For inputString = "abac", 
// the output should be = false; For inputString = "a", the output should be = true.

function Palindrom(str){

    let result={};
    if(result==true){
        console.log("im true");
   }else{
       console.log("im false");
   }
   }
   Palindrom("aba1");
   
   var inputArray="abbba";
   var resultArray=[];
   var result=false;
   for (var i = inputArray.length-1 ; i >= 0; i--) {
       console.log(inputArray[i]);
       resultArray.push(inputArray[i]);
     if(inputArray[i]===resultArray[i]){
       result= true;
     }else{
       result= false;
     }
    }
    console.log(result);
  
  