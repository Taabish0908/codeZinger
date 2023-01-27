/* Check whether strings are rotation of each other
String
Close
Given two strings S1 & S2, write a program to say whether S2 is a rotation of S1.

e.g. string S2=CDAB is a rotation of string S1=ABCD, whereas string S2=ACBD is not a rotation of string S1=ABCD

 

Input:
    ABCD
    CDAB

 

    where, 

First line represents string S1. 
Second line represents string S2. 
 

Output:
    Yes
Input:
    ABCD
    CBDA
Output:
    No
Assumptions: 

Strings S1 and S2 contain only upper case characters. */

function solution(S1,S2) {
    //Write your solution here
      for(let i=0; i<S1.length;i++){
          S1=S1[S1.length-1]+S1.substring(0,S1.length-1);
          if(S1 == S2){
              return "Yes"
          }
      }
      return "No"
  }
  S1 = 'ABCD'
  S2 = 'CDAB'
  const res=solution(S1,S2)
  console.log(res)