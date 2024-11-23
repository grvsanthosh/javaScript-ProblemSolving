// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    let value = userInput[0];
    let ram = 0
    let sita = 0
    let [m,n] = value.split(' ').map((e)=> {return Number(e)})
    
    for (let i = 1; i<=m;i++){
        let line = userInput[i]
               
        ram += count(line,'0')
        sita += count(line,'1')
    }
    console.log(`RAM: ${ram}`)
    console.log(`SITA: ${sita}`)
});

function count(line, key){
    let count = 0
    for(let val of line){
        if(val === key) 
            count++;
    }
    return count;
}
