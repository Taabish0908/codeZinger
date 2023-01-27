/*  Reverse an array
Array
Close
Given an array of integers A, reverse the array.

 

Input 
    5 
    9 0 2 1 8

 

    Where, 

The first line represents the size of an array. 
The second line represents array elements separated by single space.
 

Output 
    8 1 2 0 9 */

    function solution(a,arr) {
        let res = []
        for(let i=arr.length-1;i>=0;i--){
            res[res.length] = arr[i]
        }
        return res.join(" ")
      //Write your solution here
    }