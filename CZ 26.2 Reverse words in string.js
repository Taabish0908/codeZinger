/*Reverse words in stringClose
Given a string S, Write a program to reverse words in the string.

 

Input:

    How are you

   

    where:

First line represents the input string S
 

Output:

    you are How

 

Assumptions:

Length of the string S can be 0 to 10000*/

function solution(a) {
    let arr = a.split(" ")
    let left =0
    let right = arr.length-1
    while(left<right){
        let temp = arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr.join(" ")
  //Write your solution here
}