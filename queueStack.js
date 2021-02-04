console.time("Time Complexity: ");
let inputArray = [1,2,3];
let a2 = [];

function valuePush(value)  {    
inputArray.push(value);
console.log(inputArray);
}

function removeStack(value) {
    inputArray.pop();
    console.log(inputArray);
}

function removeQueue() {
    for(let i=inputArray.length-1; i>=0; i--){
        // a2.push(inputArray[i]);
        a2.push(inputArray.pop())
    }
    a2.pop();
    // inputArray=[];
    for(let i=a2.length-1; i>=0; i--){
        // inputArray.push(a2[i]);
        inputArray.push(a2.pop());
    }

    console.log(inputArray);
}

valuePush(4);
valuePush(5);
removeQueue();

console.timeEnd("Time Complexity: ");