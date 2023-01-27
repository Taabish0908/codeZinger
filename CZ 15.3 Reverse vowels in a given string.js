/* Reverse vowels in a given string
String
Close
Given a string S, write a program to reverse only the vowels of string.

 

Input:

    hello world

 

    where:

First line represents string S.
 

Output:

    hollo werld*/

    function solution(a) {
        let arr = a.split("");
        let vowels = ["A","E","I","O","U","a","e","i","o","u"];
        let left = 0
        let right = arr.length -1;
        while(left < right){
            if(vowels.indexOf(arr[left]) === -1){
                left ++;
                continue;
            }
        
        if(vowels.indexOf(arr[right]) === -1){
            right --;
            continue;
        }
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left ++;
        right --;
      //Write your solution here
    }
    return arr.join("")
    
    }