/* Generate Kth Fibonacci term using recursion
FunctionRecursion
Close
Given an integer K, find the Kth Fibonacci number using recursion. 

 

Write a function that accepts an integer K. The function should return Kth Fibonacci number using recursion. 

 

Input:

    10

 

    where:

First line represents a value of K
 

Output:
    55*/

    function solution(a) {
        if (a <= 1)
            return a;
        return solution(a-1) + solution(a-2);
      //Write your solution here
    }
    