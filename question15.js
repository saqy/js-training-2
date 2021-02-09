
delayedUpperCase = (input, n) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(typeof(input)==='string'){
                resolve(input.toUpperCase());
            } else {
                reject('Error: '+input);
            }
        },n);
    });
}

printDelayed = () => {
    delayedUpperCase("Hannan", 200).then((a)=>{
        console.log(a);
    }).catch((input)=> {
        console.log(input);
    })
};

printDelayed();