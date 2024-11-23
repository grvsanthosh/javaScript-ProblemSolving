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
    let input1 = userInput[0];
    let input2  = findreverse(input1);

    if(input1.length === input2.length){
        let isPalindrome = true
        for (let i = 0;i<input1.length;i++){
            if(input1[i] !== input2[i]){
                isPalindrome = false;
                break;
            }

        }    
        if(isPalindrome){
            console.log("Palindrome");
        }
        else{
            console.log("Not Palindrome");
        }
    }
    else{
        console.log("length is different");
    }
    
})

function findreverse(value){
    let reverse = "";
    for(let i = value.length -1; i >= 0;i--){
        reverse+=value[i]
    }
    return reverse;
}

let userInput = []