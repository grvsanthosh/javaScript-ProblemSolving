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

let  input = [5,2,3,9,7,4];
let target = 10;

let input2d = input.map((e,i)=>{
    return [i,e];
})

let arr = input2d.sort((a,b)=>{ return (a[1] -b[1])})
let left = 0;
let right = arr.length - 1;

while(left < right){
    if((arr[left][1] + arr[right][1]) === target){
       
       return console.log([arr[left][0] , arr[right][0]])
    }
    else if((arr[left][1] + arr[right][1])< target){
        left++;
    }
    else{        
        right--;
    }
    
}