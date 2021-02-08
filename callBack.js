// call back

firstCallBack = () => {
    setTimeout(()=>{
        console.log("First call back");
    }, 400)
}

secondCallBack = (call) => {
    setTimeout(()=>{
        console.log("Second Call Back");
        call();
    }, 500)
}

callBackPrint = () => {
    secondCallBack(firstCallBack);
}
callBackPrint();

