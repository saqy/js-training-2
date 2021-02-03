///////////////////////////////////////////////problem 12//////////////////////////////////////////////////

// Given the list of items and their actual prices and sold prices. Find the number of items in sold products which has wrong prices
// Example Input
// Products = ['eggs', 'milk', 'cheese'];
// productPrices = [2.89, 3.29, 5.79];
// productSold = ['eggs', 'eggs', 'cheese', 'milk']
// soldPrice = [2.89, 2.99, 5.97, 3.29];

var products=["eggs","milk","cheese","mango"];
var productPrices=[2.89,3.29,5.79,2.99];
var productSold=["eggs","eggs","cheese","milk","eggs","mango"];
var soldPrice=[2.819,2.919,5.97,3.219,2.819,2.99];
var wrong=0;

for(var i=0;i<=productSold.length-1;i++){
  for(let j=0;j<=products.length-1;j++){
     if(productSold[i]===products[j]){
       if(soldPrice[i]===productPrices[j]){
        }else{
        wrong++;
      } 
    }
  } 
} 