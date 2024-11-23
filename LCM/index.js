const readline = require('readline');

const rl = readline.createInterface(
  {
    input:process.stdin,
    output:process.stdout
  }
  )

  rl.on('line',(input)=>{
    userInput.push(input)
  })

  rl.on('close',()=>{
    let input1 = userInput[0];
    let input2 = userInput[1];
    let min = 0;
    if(input1 < input2){
        min = input2
    }
    else{
        min = input1
    }

  while(true){
    if(min % input1 == 0 && min % input2 == 0){
        console.log(min);
        break;
    }
    min++;
  }

  })

  let userInput = []