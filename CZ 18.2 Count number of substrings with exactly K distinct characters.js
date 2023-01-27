/* Count number of substrings with exactly K distinct characters
String
Close
Given a string S of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly K distinct characters

 

Input:

     abc

     2

 

    where:

First line represents input String S.
Second line represents K.
 

Output:

     2

 

Explanation:

Possible substrings with 2 distinct characters are {"ab", "bc"}
 

Assumptions:

Value of K can be 1 to 26.*/

function solution(S, k) {
    let ans = []
    for (let i = 0; i < S.length - k + 1; i++) {
        const element = S[i]; 
          if (k == 1) {
            ans.push(element)
        }
        let temp = element
        let diff = 1
        let char = []
        for (let j = i + 1; j < S.length; j++) {
            temp = temp + S[j] 
            if (S[j] !== element) {
                if (diff < k) {
                    char.push(S[j])
                    diff = diff + 1
                }
                if (char.includes(S[j]) === false) {
                    diff = diff + 1    
                }
            }
            if (diff == k) {
                ans.push(temp)
            }  
        }
    }
        return ans.length
    }

    