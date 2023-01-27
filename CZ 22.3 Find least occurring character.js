/*
Find least occurring character
String
Close
Given a string S, find the least occurring character in the input string S.

e.g., if the input string is “tests” then the output should be ‘e’.

 

Note: If there are more than 1 characters with least count than display the smallest character.

 

Input:

    hello

   

    where:

First line represents the input string S.
 

Output:

    e

 

Explanation:

Characters 'h','e' and 'o' occurs only once and 'e' has the smallest ASCII value among them. */


function solution(str){
    const obj = {}
    let char = 1000
    for(let i of str){
        obj[i] = obj[i] + 1 || 1
    }
    // return obj
    let arr = Object.values(obj)
    let min = Math.min(...arr)
    for (let key in obj){
        if(obj[key] === min){
            if(key.charCodeAt(0) < char){
                char = key.charCodeAt(0)
            }
        }
    }
    return String.fromCharCode(char)
}