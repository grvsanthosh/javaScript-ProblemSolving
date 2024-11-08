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
    let num1 = Number(userInput[0]);
    let num2 = Number(userInput[1]);
    let divNum1 = findFactors(num1);
    let divNum2 = findFactors(num2);
    let sumDivNum1 = findSum(divNum1)
    let sumDivNum2 = findSum(divNum2)
    
    if(sumDivNum1 === num2 && sumDivNum2 === num1){
        console.log("amical numbers")
    }
    else{
        console.log("not amical numbers")
    }
})

function findSum (arr){
    console.log(arr)
    let output = arr.reduce((p,c)=>{
        return p + c;
    },0)
    return  output
}
function findFactors(num){
   let result = [];
   for(let i = 1;i < num;i++){
    if(num%i ===0){
        result.push(i);
    }

   } 
   return result;
}
let userInput = [];