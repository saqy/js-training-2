var myQueue=[];
var myRealQueue=[];

function addtoQueue(value){
    myQueue.push(value);
}
// function removeQueue(){
//     for(let i=myQueue.length;i>0;i--){
//         myRealQueue.push(myQueue.pop());
//         console.log(myRealQueue);
//     }
//     myRealQueue.pop();
//     for(let i=myRealQueue.length;i>0;i--){
//         myQueue.push(myRealQueue.pop());
//     }
// }
        function removeQueue(){
            for(let i=0;i<=myQueue.length;i++){
                myRealQueue.push(myQueue.pop());
            }
            console.log(myRealQueue);
            myRealQueue.pop();
           
        }
addtoQueue(1);
addtoQueue(2);
addtoQueue(3);
// addtoQueue(4);
// addtoQueue(5);
// addtoQueue(6);
  removeQueue();
//  removeQueue();
//  addtoQueue(7);
//  removeQueue();
//console.log(myQueue);
//console.log(myRealQueue);



