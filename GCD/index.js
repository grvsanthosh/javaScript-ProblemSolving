const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',(input)=>{
    userInput.push(input);
})

rl.on('close',()=>{
    let in1 = Number(userInput[0]);
    let in2 = Number(userInput[1]);

    for(let i = 1; i <=in1 && i <=in2;i++){
        if(in1 % i == 0 && in2 % i == 0){
            hcf  = i;

        }
    }
    console.log(hcf);
})
let userInput = [];
let hcf;