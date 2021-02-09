//Problem 15:- make a function "delayedUpperCase(input, n)" that takes in a 2 parameters and returns a new promise.
//using setTimeout, after n milliseconds, the promise will either resolove or reject. if the input is a string, 
//the promise resolves with that same string uppercased. if the input is anything but a string it rejects with that same input

delayedUpperCase = (input,n) =>{
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            if(typeof(input)==='string'){
                resolved(input.toUpperCase());
            }
            else{
                rejected('Error:'+input+' is not a string')
            }
        },n);
    });
};
//delayedUpperCase(124,3000).then((success)=>{console.log(success);}).catch((error)=>{console.log(error)});
init= async () =>{
    try{
        let x = await delayedUpperCase('basit',100);
         console.log(x);
        }
    catch(ex){
         console.log(ex)
    }
};
init();




