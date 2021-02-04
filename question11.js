console.time("Time Complexity: ");
let inputArr = [-4, 3, -9, 0, 4, 1]

//----------------------for-loop------------------------time-6.338ms-----------------------------
// let negativeValues = 0;
// let totalZeros = 0;
// let positiveValues = 0;

// for (var x=0; x<inputArr.length; x++){
//     if(inputArr[x]<0){negativeValues += 1;}
//     else if (inputArr[x]===0){ totalZeros += 1;}
//     else { positiveValues += 1;}
// }
// console.log("Portion of negative values "+ (negativeValues/inputArr.length).toFixed(4));
// console.log("Portion of zero values "+ (totalZeros/inputArr.length).toFixed(4));
// console.log("Portion of positive values "+ (positiveValues/inputArr.length).toFixed(4));

//----------------------for-loop---end----------------time-6.338ms-----------------------------



//----------------------reduce------------------------time-8.629ms-----------------------------
const result = inputArr.reduce((total, el)=> {
    (el<0)?total.negative+=1:(el>0)?total.positive+=1:total.zero+=1;
    return total;
},{negative: 0, positive: 0, zero: 0})

console.log("Portion of negative values "+ (result.negative/inputArr.length).toFixed(4));
console.log("Portion of zero values "+ (result.zero/inputArr.length).toFixed(4));
console.log("Portion of positive values "+ (result.positive/inputArr.length).toFixed(4));

//----------------------reduce---end-------------------time-8.629ms-----------------------------

console.timeEnd("Time Complexity: ");
