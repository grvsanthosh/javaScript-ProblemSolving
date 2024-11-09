const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',(input)=>{
    userInput.push(input);
})

rl.on('close',()=>{
    //logic
    let num = userInput[0];

    if (num === 1)
        console.log(" 1 is not a prime number or composite number")
    else if(num > 1){
        let isPrime = true
        for(let i = 2;i<num/2;i++){
            if(num %i ===0){
                isPrime = false;
                break;
            }

        }
        if(isPrime)
            console.log("prime number")
        else
            console.log("not a prime number")
    }
    
})

let userInput = []