/* 
Factorial of a number using recursion
FunctionRecursion
Close
Given an integer N, find the factorial of N using [info message="The recursion is a process of having a method continually call itself until a defined point of termination. "]recursion[/info]. 
 

Write a function that accepts an integer N and returns a factorial of a number using a recurssion. 

 

Input: 
    6 

 

    where:

First line represents a value of N.
 

Output: 
    720 */

    function solution(a) {
        if (a == 0) return 1;
      return a * solution(a - 1);
      //Write your solution here
    }