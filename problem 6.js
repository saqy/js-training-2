////////////////////////////////////Problem 6 ///////////////////////////////////////////////////

// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// Example n= 1, output = 1; For n = 2, the output should be output= 5; For n = 3, the output should be 
// output= 13. For n = 4, the output should be output = 25.


var c = 4;
function shapeArea(n) {
    var b=1;

    for (var i = 1; i <= n; i++) {
    
    b += c * (n-i);  
   
  }
  console.log(b);
}
shapeArea(4);

