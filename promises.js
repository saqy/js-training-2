firstPromise = () => {
    setTimeout(()=>{
        console.log("First Promise");
    }, 200);
}
secondPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Second Promise");
            let error = false;
            if(!error){
                resolve();
            }else{
                reject("Something Went Wrong");
            }
        }, 300)
    })
}

promisePrint = () => {
    secondPromise().then(firstPromise).catch((error)=>{
        console.log(error);
    })
}

promisePrint();













