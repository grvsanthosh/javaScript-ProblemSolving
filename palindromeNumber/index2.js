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
    // take input
const string = userInput[0]

// call the function
const value = checkPalindrome(string);

console.log(value);
})


let userInput = []
function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

