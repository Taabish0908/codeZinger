/* Check whether a string is suffix of another
String
Close
Given two strings S1 and S2, check whether S1 is a suffix of S2 i.e. check whether string S2 ends with string S1.

 

Input:

    code

    coderscode

 

    where:

First line represents string S1.
Second line represents string S2.
 

Output:    

    Yes  */


    function solution(a,b) {
        let l1 = a.length
        let l2 = b.length
        for(let i=0;i<l1;i++){
            if(a[l1-i-1]!=b[l2-i-1]){
                return "No"
            }
        }
        return "Yes"
      //Write your solution here
    }

    a= 'code';
    b= 'coderscode'

    console.log(solution(a,b))