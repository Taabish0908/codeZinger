/* Remove all occurrences of word
String
Close
Given a string S and a word W, remove all the occurrences of the word W in the input string S.

 

Input:

    hello world hello

    hello

   

    where:

First line represents the input string S
Second line represents the word to be removed W.
 

Output:

     world

 

Explanation:

String after removing all occurrences of hello becomes " world ".*/


function solution(S,W) {
    S= S.split(' ')
    W= W.split(' ')
    let arr = [];
    for(i=0;i<S.length;i++){
        // console.log(S[i])
        if(S[i] !=W[0]){
            arr.push(S[i])  
        }
    }
    
    return arr.join(' ')
  //Write your solution here 
}
S = 'hello world hello'
W = 'hello'

console.log(solution(S,W))
