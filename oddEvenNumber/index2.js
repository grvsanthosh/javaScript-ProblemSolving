
const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


rl.on('line',(input)=>{
    userInput.push(input);
})

rl.on('close',()=>{
    //logic
    let evenNum = ['0','2','4','6','8']
    let number = userInput[0];
    let lastDigit = number[number.length - 1]
    if(evenNum.includes(lastDigit)){
        console.log(`${number} is an even number`);
    }
    else  {
        console.log(`${number} is an odd number`);
    }
})

let userInput = [];