
processing=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("processing started...");
            setTimeout(()=>{
                let error = false;
                if(!error){
                    resolve();
                    console.log("Processing Completed.");
                }else{
                    reject("Someting Went Wrong!!!");
                };
            },2000);
        },500);
    });
}
downloading=()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("downloading started...");
            setTimeout(()=>{
                let error = false;
                if(!error){
                    resolve();
                    console.log("Downloading Completed");
                }else{
                    reject("Someting went wrong!");
                }
            }, 2000);
        },500);
    });
};

executing=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Execution Started...");
            setTimeout(()=>{
                let error = false;
                if (!error){
                    resolve();
                    console.log("Execution Completed");
                }else{
                    reject("Someting went wrong!");
                }
            }, 2000)
        },400)
    })
}

processPrint=()=>{
    processing().then(downloading).then(executing).catch((error)=>{
        console.log(error);
    });
};

// processPrint= async()=>{
//     await processing();
//     await downloading();
//     executing();
// }

processPrint();
