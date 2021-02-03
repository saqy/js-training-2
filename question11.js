let positive = 0;
let negative = 0;
let zero = 0;
let integarArray = [-4,3,-9,0,4,1];
let length = integarArray.length;
integarArray.map(checKProportion);
function checKProportion(p){

    if(p > 0){
       return positive++;
    }
    else if(p == 0){
      return zero++;
    }

    else{
      return negative++;
    }
}


console.log ("proportion of positive values:" + positive/length )
console.log ("proportion of negative values:" + negative/length )
console.log ("proportion of zero values:" + zero/length )