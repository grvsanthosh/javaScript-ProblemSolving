/*
    Problem: Given an array and a target, find the pair of elements and return their indices that adds up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Input: [2, 7, 11, 15], target = 9
    Output: [0, 1]

    Input: [3, 2, 4], target = 6
    Output: [1, 2]

    Input: [3, 3], target = 6
    Output: [0, 1]

    Input: [5, 2, 3, 9, 7, 4], target = 10
    Output: [2, 4]
*/

let  input = [2,7,11,15];
let target = 9;

for(let i = 0; i <input.length;i++){
    for(let j = i+1;j<input.length;j++){
        if(input[i] + input[j] === target){
            console.log(i," ",j)
        }
    }
}