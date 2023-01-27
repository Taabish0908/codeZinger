/*  Make Even numbers Odd
Array traversal
Close
Given an array of integers, write a program to convert all the even numbers present in the array to odd numbers by adding 1 to the even number.

 

Input:

    4

    1 2 3 4

    

    where:

First line represents the number of elements in the array.
Second line represents the elements of the array.
 

Output:

    1 3 3 5 */

    function solution(a,arr) {
        for(let i=0; i<arr.length; i++){
            if(arr[i] % 2 == 0){
                arr[i]++
            }
        }
        return arr.join(" ")
      //Write your solution here
    }
    