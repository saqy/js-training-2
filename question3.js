
  let array = [1,2,3,4,5,6,7];
  let k = 0;
  while(k < 3 ){
  let last = array.pop();
  array.unshift(last);
  k++;
  }
  console.log(array);
