/* Find duplicates in string
String
Close
Given a string S, find all the duplicate characters in the string S.

 

Input:

    HelloWorld

   

    where:

First line represents the input string S.
 

Output:

    lo*/

    function solution(a) {
        let obj = {}
        for(let i=0; i<a.length; i++){
            if(obj[a[i]]){obj[a[i]]++}
            else{obj[a[i]]=1}
        }
        let res = ''
        for(let k in obj){
            if(obj[k]>1){
                res = res+k
        }
        }
        return res
      //Write your solution here
    }
    