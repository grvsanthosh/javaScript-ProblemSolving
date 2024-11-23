
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
   // given  string s and t find it is anagram or not
// input s = "anagram" t = "nagaram"
// output = true
// input s = "rat" t = "car"
// output = true
// input s = "a" t = "ab"
// output = true
let input1 = userInput[0];
let input2 = userInput[1];
console.log(anagram(input1,input2))
  

})

function anagram (input1,input2){
    
    let frequency = {}
     
 
    for (let i of input1){
     frequency[i] = 0
    }
 
    for (let i of input1){
     frequency[i]++
    }
 
    for (let i in input2){
 
     if(!(input2[i] in frequency)){
         return false;
     }
 
     if((input2[i] in frequency) && frequency[input2[i]] === 0){
        return false;
     }
     else{
         frequency[input2[i]]--
     }
    }
 
    for(let key in frequency){
     if(frequency[key] > 0)
     {
        return false;
     }
    }

    return true;
}
let userInput = []


