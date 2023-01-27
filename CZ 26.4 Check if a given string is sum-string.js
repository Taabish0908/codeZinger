/*Check if a given string is sum-string
String
Close
Given a string of digits, determine whether it is a ‘Sum-String’.

A string S is called a sum-string if a rightmost substring can be written as a sum of two substrings before it and same is recursively true for substrings before it.

 

Input:

    12243660

 

    where:

First line represents input string S.
 

Output:

    Yes

 

Explanation : 24 + 36 = 60, 12 + 24 = 36

 

Input: ​​​​​​

     2368

 

Output:

    No

 

Note:

In general a string S is called sum-string if it satisfies the following properties:
          sub-string(i, x) + sub-string(x+1, j) = sub-string(j+1, l) and sub-string(x+1, j)+sub-string(j+1, l) = sub-string(l+1, m) and so on till end.

 */

          function solution(a) {
            a= JSON.stringify(a)
            const arr = []
            for(let i=0;i<a.length;i+=2){
                arr.push(Number(a.slice(i,i+2)))
                
            }
            for(let j=0;j<arr.length-3;j++){
                if(arr[j]+arr[j+1] != arr[j+2]){
                    return "No"
                }
            }
            return "Yes"
          //Write your solution here
        }
        