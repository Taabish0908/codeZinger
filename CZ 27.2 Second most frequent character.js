/* Second most frequent character
String
Close
Given a string S, Find the second most frequent character in S.

 

Input:

    aaabbcccc

 

    where:

First line represents input string S
 

Output:

    a

 */

    function solution(str) {
    
        // Creating map of according to the frequency
            let map =new Map();
            for(let i =0;i<str.length;i++){
                let count =0;
                for(let j =0;j<str.length;j++){
                    if(str[i]==str[j]){
                        count++
                    }
                    map.set(str[i],count)
                }
            }
            
        // find second most frequent value of element
            let first = 1, second = 0;
            for (let i of map.values()) {
                if (i>first){
                second=first;
                first=i;
                }
                else if(i>second && i!=first)
                second=i;
            }
            
        // find the key using the value I get
            for (let [key, value] of map.entries()) {
                if (value === second)
                    return key;
            }
        }