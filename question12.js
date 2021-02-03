let Products = ['eggs', 'milk', 'cheese'];
let productPrices = [2.89, 3.29, 5.79];
let productSold = ['eggs', 'eggs', 'cheese', 'milk']
let soldPrice = [2.89, 2.99, 5.97, 3.29];

let productObj=Products.map((product,index)=>{
return {
name:product,
price:productPrices[index]
}
})
console.log(productObj)


let soldObj=productSold.map((sold,index)=>{
return {
name:sold,
price:soldPrice[index]
}
})

console.log(soldObj);

let result=soldObj.filter((sold,index)=>{
let originalPrice=productObj.find(obj=>obj.name===sold.name)
return sold.price!==originalPrice.price

})


let answer = result.length;

console.log(answer);