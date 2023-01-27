/* Count substrings with same first and last characters
String
Close
Given a string S, find the count of all substrings starting and ending with the same character.

 

Input:

    abcab

 

    where:

First line represents input string S.
 

Output:

    7

 

Explanation:

There are 15 substrings of  abcab : a, ab, abc, abca, abcab, b, bc, bca, bcab, c, ca, cab, a, ab, b.
Out of the above substrings, there are 7 substrings: a, abca , b, bcab , c, a and b starting and ending with the same character.
 

Assumptions:

Character comparisons will be case-sensitive.  */


function solution(a) {
    
    let result = 0;
    for(let i=0;i<a.length;i++){
        for(let j=i;j<a.length;j++){
            if(a.charAt(i) == a.charAt(j)){
                result++;
            }
        }
    }
    return result;
  //Write your solution here
}

let a = 'abcab'
console.log(solution(a))