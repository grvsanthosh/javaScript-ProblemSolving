
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

   let arr = input.sort((a,b)=>{
    return b - a;
   })
   
   console.log(arr);
})

let userInput = [];