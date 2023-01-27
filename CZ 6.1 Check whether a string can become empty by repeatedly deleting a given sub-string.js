/* Check whether a string can become empty by repeatedly deleting a given sub-string
String
Close
Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again. You are allowed to delete S2 from S1 any number of times.

 

Input:

    cocodede

    code

 

    where:

First line represents string S1.
Second line represents string S2.
 

Output:

    Yes

Explanation:

In the string S1= "cocodede", we can first delete the substring "code". S1 now becomes "code". We can again delete sub-string "code". Now the string S1 becomes empty.
  */ 

function solution(a,arr) {
    //Write your solution here
      while(a.length>0){
          let result = a.indexOf(arr)
          if(result == -1){
              break;
          }
          a = a.replace(arr,"")
      }
      if(a.length ==0)
          return "Yes"
      else
          return "No"
  }

  a='cocodede'
  arr= 'code'
  const res=solution(a,arr)
  console.log(res)