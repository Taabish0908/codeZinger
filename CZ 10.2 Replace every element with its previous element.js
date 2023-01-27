/* Replace every element with its previous element
Array
Close
Given an array A of integers, write a program to replace each element in the array by the previous element. Replace the first element by -1.

 

Input:

    4

    1 2 3 4

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    -1 1 2 3

 

Explanation: Every element A[i] is replaced by A[i-1]. And the first element will be -1, as the first element doesn't have any previous element.

   */


function solution(a,arr) {
    let b = [-1]
    for(let i=0;i<a-1;i++){
        b.push(arr[i])
    }
    return b.join(" ")
  //Write your solution here
}
let a= 4;
let arr = [1,2,3,4]
console.log(solution(a,arr))