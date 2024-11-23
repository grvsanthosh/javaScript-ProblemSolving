
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

    let frequency = {}

    for (let i of number){
        frequency[i] = 0;
    }
    for (let i of number){
        frequency[i]++;
    }
    
    console.log(frequency);
   
})

let userInput = [];