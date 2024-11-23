
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

  let arr = input.reduce((p,c)=>{
    return Number(p)+Number(c);
  },input[0])
   console.log(arr)
})

let userInput = [];