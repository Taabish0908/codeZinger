/* Missing characters to make a string Pangram
String
Close
Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output in alphabetic order.

 

Input:

     The quick brown fox jumps

 

    where:

First line represents string S.
 

Output:

    adglvyz*/

    function solution(a) {
        var s="abcdefghijklmnopqrstuvwxyz"
        var b=[]
        for(let i=0;i<s.length;i++){
            if(a.indexOf(s[i])== -1){
                b.push(s[i])
            }
        }
        var c = b.toString().replace(/,/g,'');
        return c
        
      //Write your solution here
    }