/*
Separate individual characters of string
String
Close
Given a string S, separate the individual characters from the string.

 

Input:

    Hello

   

    where:

First line represents the input string S
 

Output:

    H e l l o

 

Assumptions:

Length of the string S can be 0 to 10000  */

function solution(a) {
    str = a.split('')
    return str.join(' ')
  //Write your solution here
}
