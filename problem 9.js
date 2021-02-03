/////////////////////////////////////////////problem 9///////////////////////////////////////////////////////////////

// Count frequencies of each entry in an array For example const fruitBasket=
// ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
// It should return an object like this { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }


const fruitBasket = ['banana', 'banana','cherry', 'orange', 'apple','fig', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

var reducer=fruitBasket.reduce(function(accumulator,currentvalue){
  if(currentvalue in accumulator){
    accumulator[currentvalue]++;
  }else{
    accumulator[currentvalue]=1;
  }
  return accumulator
},{});
console.log(reducer);
