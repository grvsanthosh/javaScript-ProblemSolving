
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
    // given an array number contains n distinct number in range [0,n] return the only missing number in the range
// input [3,0,1]
// output [2]
    let input = userInput;

    let frequency = {}
    for(let i of input){
        frequency[i] = true;
    }

    let len = input.length + 1;

    for (let i = 0;i < len;i++){
        if(frequency[i] === undefined){
            console.log(i)
            break;
        }
    }

})


let userInput = []


