/* Number of substrings divisible by 6
String
Close
Given a string S consisting of integers 0 to 9, find the number of substrings which are divisible by 6. Substring does not contain leading zeroes

 

Input:

    606

 

    where:

First line represents input string S.
 

Output:

     5

 

Explanation:

Substrings "6", "0", "6", "60", "606" are divisible by 6.
 

Input:

    4806 

 

Output:

     5

 

Explanation:

Substrings "0", "6", "48", "480", "4806" are divisible by 6.*/
function solution(a) {
    let count =0;
    let rem =0;
    let t =0;
    for (let i=0;i<a.length;i++){
        rem =0
        for(let j=i;j<a.length;j++){
            t=a[j];
            if(i==j && t==0){
                count++;
                break;
            }
            if(t%2 == 0 && (rem+t)%3==0){
                count++
            }
            rem = (rem+t)%3;
        }
    }
    return count++;
        
  //Write your solution here
}
a= '606';
console.log(solution(a))