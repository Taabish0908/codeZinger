/* Replace every element of an array by its frequency
Array
Close
Given an array of integers, replace every element by its frequency in the array.

 

Input:

    6

    1 2 5 2 2 5

    

    where

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    1 3 2 3 3 2

    

Explanation: In the array, the element 1 has occurred only once so it's frequency is 1.
 Element 2 has occurred thrice so its frequency is 3, and element 5 has occurred twice so its frequency is 2.

 

Assumptions:

Array element can be in the range -1000 to 1000. */

function solution(arr) {
    var newArr=[...arr];
    for(let i=0;i<arr.length;i++){
        var count =0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
        newArr[i]=count;
    }
    return newArr;
  //Write your solution here
}

arr = [1,2,5,2,2,5]
const res = solution(arr)
console.log(res)