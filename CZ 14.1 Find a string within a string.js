/*  Find a string within a string
String
Close
Given two strings S1 & S2, search for an occurrence of the second string within a first string.  

Note: Do not use system library for the implementation. 

 

Input:
    Code Zinger University 
    Zinger

 

    where, 

First line represents string S1. 
Second line represents string S2. 
 

Output:
    5 

 

Here 'Zinger' word starts at 5th index within 'Code Zinger University’. 

 

Assume that, 

The length of strings S1 & S2 are within the range [1 to 10000].
Character comparisons will be case-sensitive. */


function solution(s1,s2) {
    for(let i=0;i<=s2.length-s1.length;i++){
        let j
        for(j=0;j<s1.length;j++){
            if(s2[i+j] != s1[j])
                break
        }
        if(j==s1.length)
            return i
    }
    return -1
  //Write your solution here
}
