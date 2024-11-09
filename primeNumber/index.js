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

    let num = Number(userInput[0]);
    if(num === 1)
        console.log(" 1 is neither a prime number nor a composite number")

    else if(num > 1){
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
    
        if(isPrime)
            console.log(`${num} is a prime number`);
        else
            console.log(`${num} is not a prime number`);

    }

    else
        console.log("The number is not a prime number.")
    
})

let userInput = []