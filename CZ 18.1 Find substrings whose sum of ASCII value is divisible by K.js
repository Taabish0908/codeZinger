/* Find substrings whose sum of ASCII value is divisible by K
String
Close
Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.

 

Input:

    bcgabc

    3

 

where:

First line represents the input string S
Second line represents K
 

Output:

     2

 

Explanation:

Substring “bcg” has sum of ASCII values 300 and “abc” has sum of ASCII values 294 which are divisible by 3.*/

function solution(s,k) {
    var n = s.length;
    var d = 0, i;
    var count = 0;
     
    for(i = 0; i < n; i++)
        d += s[i].charCodeAt(0);
         
        if (d % k === 0)
        {
            count += 1;
        }
         
        for(i = k; i < n; i++)
        {
            var prev = s[i - k];
            d -= prev.charCodeAt(0);
            d += s[i].charCodeAt(0);
             
            // checking if sum is divisible by k
            if (d % k === 0)
                count += 1;
        }
         
    return count;
  //Write your solution here
}