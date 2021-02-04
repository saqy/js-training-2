console.time("Time Complexity: ");
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
let count={};

//--------------forEach---------------------------------
fruitBasket.forEach((value) => {
    if (count.hasOwnProperty(value)){
        count[value]+=1;
    } else {
        count[value] = 1;
    }
});
console.log(count);
//---------------forEach----end-------------time-15.554ms------------


//---------------for-of----------------------------------
// for (let value of fruitBasket){
//         if (count.hasOwnProperty(value)){
//             count[value]+=1;
//         } else {
//             count[value] = 1;
//         }
// }
// console.log(count);
//---------------for-of----end---------------time-19.053ms-----------

//-------------reduce------------------------------------
// let count = fruitBasket.reduce((basket, fruit) => {
//     if (!basket[fruit]) {basket[fruit]=1;} else
//     if(basket[fruit]) {basket[fruit]+=1;}
//     return basket;
// }, {});
// console.log(count); 
//------------reduce end---------------------time-18.474ms------------

console.timeEnd("Time Complexity: ");

