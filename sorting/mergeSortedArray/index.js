let num1 = [1,3,5,7,9]
let num2 = [2,4,6,8,10]

function insertionsort(num1, num2) {
    for(let i = 0; i < num2.length;i++){
        let box = num1.length - 1;
        let temp = num2[i];
        for(let j = num1.length - 1; j >=0;j--){

            if(temp < num1[j]){
                num1[j+1] = num1[j];
                box = j;
                num1[box] = temp
            }
        } 
       
    }
    console.log(num1)
}

insertionsort(num1, num2);

