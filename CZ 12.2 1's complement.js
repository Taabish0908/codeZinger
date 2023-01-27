/* 1's complement
Binary NumberBitwise-Operator
Close
Given an integer N as input, find 1's complement of N.

 

Input:

    5

 

    where:

First line represents the value of N.
 

Output:

    2

 

Assumption:

Value of N can be in the range 0 to 10000. */

function solution(a) {
    let num = (Math.floor(Math.log(a) / Math.log(2))) + 1;
    let ans = ((1 << num) -1) ^ a;
    return ans
  //Write your solution here
}

let a =5;
console.log(solution(a))