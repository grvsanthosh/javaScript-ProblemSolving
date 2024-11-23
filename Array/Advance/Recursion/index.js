function recur(input){
    if (input === 0) return
    console.log(input)
    recur(input -1)
}

recur(10)