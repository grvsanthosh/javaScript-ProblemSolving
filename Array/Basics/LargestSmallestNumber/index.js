
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
   let input = userInput;
   
   let min = input.reduce((p,c)=>{
    return  Math.min(p,c);
     
   },input[0])

   let max = input.reduce((p,c)=>{
   return Math.max(p,c);
   },input[0])
   
   console.log(`Minimum value: ${min}`);
   console.log(`Maximum value: ${max}`);
   
})

let userInput = [];