
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
    let number = userInput[0];
    let bval = Number(number).toString(2);
    if(bval[bval.length-1] == 0){
        console.log(`number ${number} is even`);
    }
    else  {  
        console.log(`number ${number} is odd`);
    }
})

let userInput = [];