/*
Count repeated character in string
String
Close
Given a string S, count the repeated character(s). 

Write a function: 
        int solution(String S)

 

that accepts string S. The function should return the count of repeated characters('A' to 'Z' and 'a' to 'z').

 

Input
    repeatedchar 

 

Output 
    3 

 

Here in the given string a, e and r characters are repeated. 

 

Assume that: 

The length of String S within the range [1 to 2,0000] 
The character comparison will be case-sensitive.*/

function solution(a) {
    let arr = a.split("")
    const map = new Map()
    for(let i=0; i<arr.length;i++){
        if(map.get(arr[i])==undefined){
            map.set(arr[i],1)
            
        }else{
            map.set(arr[i],map.get(arr[i])+1)
        }
    }let result = []
    for(let ele of map){
        if(ele[1]>1){
            result.push(ele[0])
        }
    } return result.length
    
  //Write your solution here
}
