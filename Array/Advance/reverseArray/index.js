
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
   /*
    Problem: Given an array, reverse the array.

    Input: [2, 5, 3, 4, 1]
    Output: [1, 4, 3, 5, 2]

    Input: [4, 7, 5]
    Output: [5, 7, 4]
    */

    // two pointer method

    let input = userInput;
    let len = input.length;
    for(let i = 0; i < len/2;i++){
        let temp = input[i];
        input[i] = input[len - 1 - i]
        input[len - 1 - i] = temp;        
    }
    console.log(input);

   
})

let userInput = [];