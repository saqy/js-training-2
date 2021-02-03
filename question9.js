let fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

function checkFrequency(fruitBasket) {
  var a = [],  
    b = [],     
    prev;      
  fruitBasket.sort();
  for (let i = 0; i < fruitBasket.length; i++) {
    if (fruitBasket[i] !== prev) {
      a.push(fruitBasket[i]);
      b.push(1);
    } 
    
    else {
      b[b.length - 1]++;
    }
    prev = fruitBasket[i];
  }

  return [a, b];
}

var result = checkFrequency(fruitBasket);
console.log('{' + result[0] +':' + result[1] + '}')  