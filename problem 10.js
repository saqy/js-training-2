////////////////////////////////////////////////problem 10/////////////////////////////////////////////////////////////

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix is shown below:
// 1 2 3
// 4 5 6
// 9 8 9


var arr=[[1,2,3],
        [4,5,6],
        [9,8,9]];
var leftToRightSum=0,rightToLeft=0,diff=0,j=2;
     for(let i=0;i<arr.length;i++){
      leftToRightSum+=arr[i][i];
      rightToLeft+=arr[i][j];
      j--;
    }
  
   
    diff=rightToLeft-leftToRightSum;
   console.log(diff);
   console.log(arr.length);
   