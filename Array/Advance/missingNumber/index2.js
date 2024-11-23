
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
    // given an array number contains n distinct number in range any sequence of range return the only missing number in the range
// input [3,0,1]
// output [2]
    let input = userInput;

    let min = input.reduce((p,c)=>{
        return Math.min(p,c);
    },input[0])

    let max = input.reduce((p,c)=>{
        return Math.max(p,c);
    },input[0])

    let frequency = {}
    for(let i of input){
        frequency[i] = true;
    }

    for (let i = min;i <= max;i++){
        if(frequency[i] === undefined){
            console.log(i)
            break;
        }
    }

})


let userInput = []


