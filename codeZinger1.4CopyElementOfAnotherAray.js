// Copy elements of one array into another
// Tags:	Array
// Given an array of integers, copy elements of one array into another array of the same size.
// Input:
// 3
// 1 2 3
// where:
// First line represents the number of elements in the array.
// Second line represents the elements in the array.
//  Output:
// 1 2 3

function solution(arr){

// let arr1 = arr
    // return arr1.join(" ")
    let result = [...arr];
    return result.join(" ")
}

let arr = [1,2,3]
const res = solution(arr)
console.log(res)
