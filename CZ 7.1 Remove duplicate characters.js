/* Remove duplicate characters
String
Close
Given a string S, remove the repeated characters in the string

 

Input:

    Hello World

   

    where:

First line represents the input string
 

Output:

    Helo Wrd
Assumptions:

Length of the string S can be 0 to 10000
Character comparisons will be case-sensitive. */

function solution(a) {
    //Write your solution here
      let result = ""
      for(let i=0; i<a.length;i++){
          let c = a[i];
          if(!result.includes(c)){
              result+=c;
          }
      }
      return result;
  }
  a= 'Hello World'
  const res= solution(a)
  console.log(res)