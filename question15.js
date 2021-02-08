


delayedUpperCase = (input, n) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof input==='string'){
                resolve();
                console.log(input.toUpperCase());
            } else {
                reject(input);
            }
        },n)
    })
}

printDelayed = () => {
    delayedUpperCase("Hannan", 200).catch((input)=> {
        console.log(input);
    })
};

printDelayed();