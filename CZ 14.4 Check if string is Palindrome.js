/* Check if string is Palindrome
String
Close
Given a string S, check whether a string S is [info message="A string is a palindrome if it remains unchanged when reversed."]Palindrome[/info] not. 

 

Display 1 if string is palindrome else 0. 

 

Input
    level 

 

Output
    1 

 

Assume that, 

The length of string S is within the range [0 to 10000].*/

function solution(a) {
    let str = a.length
    for(let i=0;i<str/2;i++){
        if(a[i] !== a[str-1-i]){
            return 0
        }
            
    }
    return 1
  //Write your solution here
}
