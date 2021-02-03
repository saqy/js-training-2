let intArr = [3,6,-2,-5,7,3];
  let cb = 0;
  for(let i=0;i<intArr.length;i++){
      if(intArr[i]*intArr[i+1] > cb){
        cb = intArr[i]*intArr[i+1];
      }
  }
console.log(cb)