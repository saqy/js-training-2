//////////////////////////////////////problem 4///////////////////////////////////////////

// Create a nested Create a nested for loops produce the loops produce the
// following output.
// ....1
// ...22
// ..333
// .4444
// 55555


let x='';
for(let i=1;i<6;i++){
  x="";
  for(let j=5;j>0;j--){
    if(j>i){
    x+=".";
    }else{
      x+=i;
    }

   }
    console.log(x);
}

