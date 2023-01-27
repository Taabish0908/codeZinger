/* Reverse a number using recursion
FunctionRecursion
Close
Given a number N as input, write a program to reverse N using recursion.

 

Write a function that accepts an integer N. The function should return reverse of N using recursion. 

 

Input:

    10348

 

    where:

First line represents a value of N.
 

Output:
    84301*/


    function solution(a) {
        let revNum = 0;
            while(a > 0)
                {
                    revNum = revNum * 10 + a % 10;
                a = Math.floor(a / 10);
                }
                return revNum;
    
      //Write your solution here
    }
    