
firstPromise = () => {
    return new Promise((resolve, reject)=>{
        let error = false;
        if(!error){
            resolve(55);
        }else{
            reject("something went wrong!");
        }
    })
}

secondPromise = () => {
    return new Promise((resolve, reject)=>{
        let error = false;
        if(!error){
            resolve(66);
        }else{
            reject("something went wrong");
        }
    })
}

thirdPromise = () => {
    return new Promise ((resolve, reject)=>{
        let error=false;
        if(!error){
            resolve(77);
        }else{
            reject("something went wrong!");
        }
    })
}

let allPromises = [firstPromise(), secondPromise(), thirdPromise()];

Promise.all(allPromises)
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});

