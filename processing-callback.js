processing=(downloading, executing)=> {
    setTimeout(()=>{
        console.log("Processing Started...");
        setTimeout(()=>{
            console.log("Processing Completed");
            downloading(executing);
            
        }, 5000)
    }, 300)
}

downloading=(executing)=>{
    setTimeout(()=>{
        console.log("downloading started...");
        setTimeout(()=>{
            console.log("downloading completed.");
            executing();
        },3000)
    },400)
}

executing=()=>{
    setTimeout(()=>{
        console.log("execution started...");
        setTimeout(()=>{
            console.log("Execution Completed.");
        }, 3000);
    }, 400);
}

processing(downloading, executing);