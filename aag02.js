function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
        {
            let success = true;
            if(success)
            {
                resolve()
            }
            else
            {
                reject()
            }
        }, 1000);
    });
    
    }
    asyncFunction()
    .then((result) =>{ 
        console.log("Name: Tushar");
    
     })
    .catch((error) => {
    console.error("not data found");
    });