// program to check if the string is palindrome or not
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
    let input = userInput[0];
    let arr = [];
    for(let i = 1; i <=input/2;i++){
        if(input % i === 0){
            arr.push(i);
        }
    }
    let value = arr.reduce((p,c)=>{
        return p + c;
    })
    if(value == input){
        console.log("it a perfect number")
    }
    else{
        console.log("its not a perfect number")
    }

    })



let userInput = []
