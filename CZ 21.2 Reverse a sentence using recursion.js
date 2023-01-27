/* Reverse a sentence using recursion
String
Close
Given a string S, write a program to reverse the input string without using any built-in function

 

Input:

    hello world

   

    where:

First line represents the input string
 

Output:

     dlrow olleh

 

Assumptions:

Length of string can be 0 to 10000*/

function solution(str) {
    return str.split("").reverse().join("");
  //Write your solution here
}