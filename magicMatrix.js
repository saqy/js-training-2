console.time("Time Complexity: ");  //starts timer
let magicMatrix = 
[
[[8,1,6],[3,5,7],[4,9,2]],
[[6,1,8],[7,5,3],[2,9,4]],
[[4,9,2],[7,5,3],[8,1,6]],
[[2,9,4],[3,5,7],[6,1,8]],
[[8,3,4],[1,5,9],[6,7,2]],
[[4,3,8],[9,5,1],[2,7,6]],
[[6,7,2],[1,5,9],[8,3,4]],
[[2,7,6],[9,5,1],[4,3,8]]
];

let matrix = [[2,9,5],[3,5,7],[6,1,8]];

let minCost=undefined;
let finalMatrix = [[],[],[]];
for(let x=0; x<magicMatrix.length; x++){ //it targets first dimention of magic matrix (upto 7)
    let minTemp=0;                       // it changes minTemp to 0 every time when moves to next combination in magic matrix
    let testMatrix = [[],[],[]];         // to store temporary value. also changes to empty matrix while moving to next combination
    for(let i=0; i<matrix.length; i++){  
        for (let j=0; j<matrix.length; j++){
            minTemp += Math.abs(magicMatrix[x][i][j]-matrix[i][j]);
            testMatrix[i][j] = magicMatrix[x][i][j];
        }
        
    };
    // console.log("minTemp = " + minTemp);
    if(minCost==undefined){
        minCost=minTemp;
        finalMatrix = testMatrix;
    }else 
    if(minCost>minTemp){
        minCost=minTemp;
        finalMatrix=testMatrix;
    }
    
}

console.log("Orignal Matrix: "+ matrix);
console.log("Magic Matrix: " + finalMatrix);
console.log("Min Cost to change = "+minCost);
console.timeEnd("Time Complexity: ");   // stops timer and show total time.














// second method to check and convert any matrix into magic matrix-----------------------------------------

// let matrix = [[5, 1, 4], 
//               [1, 5, 8], 
//               [6, 4, 2]];
/*
let matrix = [[5, 3, 4], 
              [1, 5, 8], 
              [6, 4, 2]];


const matrixCopy = [[5, 3, 4], 
                    [1, 5, 8], 
                    [6, 4, 2]];

matrix[1][1]=5;
//even corners
if (matrix[0][0]%2 !== 0 ) {
    if(matrix[0][2]!==2 && matrix[2][0]!==2 && matrix[2][2] !==2){
        matrix[0][0]=2;
    }
    if(matrix[0][2]!==4 && matrix[2][0]!==4 && matrix[2][2]!==4){
        matrix[0][0]=4;
    }
    if(matrix[0][2]!==6 && matrix[2][0]!==6 && matrix[2][2]!==6){
        matrix[0][0]=6;
    }
    if(matrix[0][2]!==8 && matrix[2][0]!==8 && matrix[2][2]!==8){
        matrix[0][0]=8;
    }
}
if (matrix[0][2]%2 !== 0 ) {
    if(matrix[0][0]!==2 && matrix[2][0]!==2 && matrix[2][2] !==2){
        matrix[0][2]=2;
    }
    if(matrix[0][0]!==4 && matrix[2][0]!==4 && matrix[2][2]!==4){
        matrix[0][2]=4;
    }
    if(matrix[0][0]!==6 && matrix[2][0]!==6 && matrix[2][2]!==6){
        matrix[0][2]=6;
    }
    if(matrix[0][0]!==8 && matrix[2][0]!==8 && matrix[2][2]!==8){
        matrix[0][2]=8;
    }
}
if (matrix[2][0]%2 !== 0 ) {
    if(matrix[0][2]!==2 && matrix[0][0]!==2 && matrix[2][2] !==2){
        matrix[2][0]=2;
    }
    if(matrix[0][2]!==4 && matrix[0][0]!==4 && matrix[2][2]!==4){
        matrix[2][0]=4;
    }
    if(matrix[0][2]!==6 && matrix[0][0]!==6 && matrix[2][2]!==6){
        matrix[2][0]=6;
    }
    if(matrix[0][2]!==8 && matrix[0][0]!==8 && matrix[2][2]!==8){
        matrix[2][0]=8;
    }
}
if (matrix[2][2]%2 !== 0 ) {
    if(matrix[0][2]!==2 && matrix[2][0]!==2 && matrix[0][0] !==2){
        matrix[2][2]=2;
    }
    if(matrix[0][2]!==4 && matrix[2][0]!==4 && matrix[0][0]!==4){
        matrix[2][2]=4;
    }
    if(matrix[0][2]!==6 && matrix[2][0]!==6 && matrix[0][0]!==6){
        matrix[2][2]=6;
    }
    if(matrix[0][2]!==8 && matrix[2][0]!==8 && matrix[0][0]!==8){
        matrix[2][2]=8;
    }
}

// diagnol check 

for(let x=0; x<2; x++){
if (matrix[0][0]==8){
    matrix[2][2]=2;

        if(matrix[2][0]==6){
            matrix[0][2]=4;
        } else
        if(matrix[2][0]==4){
            matrix[0][2]=6;
        } else {matrix[0][2]=4};
        matrix[2][0]=6;

} 

if (matrix[0][0]==2){
    matrix[2][2]=8;
        if(matrix[2][0]==6){
            matrix[0][2]=4;
        } else
        if(matrix[2][0]==4){
            matrix[0][2]=6;
        } else {matrix[2][0]=4};
    
} 
}

for(let x=0; x<2; x++){
    if (matrix[0][0]==4){
        matrix[2][2]=6;
        
            if(matrix[2][0]==2){
                matrix[0][2]=8;
            } else
            if(matrix[2][0]==8){
                matrix[0][2]=2;
            } else {matrix[0][2]=8;
            matrix[2][0]=2;
            };
        
    } 
    
    if (matrix[0][0]==6){
        matrix[2][2]=4;

            if(matrix[2][0]==2){
                matrix[0][2]=8;
            } else
            if(matrix[2][0]==8){
                matrix[0][2]=2;
            } else {matrix[2][0]=8;
                matrix[0][2]=2;
            };
        
    } 
    }

//odd numbers check
if (matrix[0][0]+matrix[0][1]+matrix[0][2] !== 15){
    matrix[0][1]= 15 - (matrix[0][0]+matrix[0][2]);
}
if (matrix[0][0]+matrix[1][0]+matrix[2][0] !== 15){
    matrix[1][0]= 15 - (matrix[0][0]+matrix[2][0]);
}
if (matrix[2][0]+matrix[2][1]+matrix[2][2] !== 15){
    matrix[2][1]= 15 - (matrix[2][0]+matrix[2][2]);
}
if (matrix[0][2]+matrix[1][2]+matrix[2][2] !== 15){
    matrix[1][2]= 15 - (matrix[0][2]+matrix[2][2]);
}

  
console.log(matrix);

let diff=0;
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix.length; j++){
        diff += Math.abs(matrix[i][j] - matrixCopy[i][j]);
    }
}
console.log("Minimum Cost:  "+diff);







let diagLeftToRight = 0;
let diagRightToLeft = 0;
let rowOne = 0;
let rowTwo = 0;
let rowThree = 0;
let columnOne = 0;
let columnTwo = 0;
let columnThree = 0;



for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix.length; j++){
        if(i == j){
            diagLeftToRight += matrix[i][j];
        }
        if (i+j == 2){
            diagRightToLeft += matrix[i][j];
        }
        if (i==0){
            rowOne += matrix[i][j];
        }
        if (i==1){
            rowTwo += matrix[i][j];
        }
        if (i==2){
            rowThree += matrix[i][j];
        }
        if (j==0){
            columnOne += matrix[i][j];
        }
        if (j==1){
            columnTwo += matrix[i][j];
        }
        if (j==2){
            columnThree += matrix[i][j];
        }
    }
}


console.log(diagLeftToRight);
console.log(diagRightToLeft);
console.log(rowOne);
console.log(rowTwo);
console.log(rowThree);
console.log(columnOne);
console.log(columnTwo);
console.log(columnThree);

*/





