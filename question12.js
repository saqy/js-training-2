let products = ['eggs', 'milk', 'cheese','mango'];
let productPrices = [2.89, 3.29, 5.79, 90];
let productSold = ['eggs', 'eggs', 'cheese', 'milk', 'mango'];
let soldPrice = [2.89, 2.99, 5.97, 3.29, 70];

let totalWrong = 0;

for ( let i=0; i<productSold.length; i++){
    let productIndex = products.indexOf(productSold[i]);
    if (soldPrice[i] !== productPrices[productIndex]) { 
    totalWrong +=1;
    console.log(productSold[i] + " has " + soldPrice[i] + " price which is wrong.")
    }
    
}

console.log("Total wrong prices= "+totalWrong);
