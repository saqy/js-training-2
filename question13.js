let a1 = [];

for ( i= 0; i<5; i++ ){
    addtoQueue(i);
}


function addtoQueue(value){
    a1.push(value);
}

function removeQueue(){
    a1.shift();
}
removeQueue();

console.log(a1);



