/* Check whether a string is Isogram or not
String
Close
Given a string S, find whether it is Isogram or not.

 

Input:

     Machine

 

    where:

First line represents string S.
 

Output:

    Yes

 

Explanation:

"Machine" does not have any character repeating, it is an Isogram */


// function solution(a) {
//     //Write your solution here
//       a = a.toLowerCase();
//       let l = a.length;
//       let arr = a.split('');
//       arr.sort();
//       for(let i=0; i<l-1; i++){
//           if(arr[i]==arr[i+1])
//               return "No";
//       }
//       return "Yes";
//   }
//   let a1 = "Machine";
//   if(solution(a1)){
//       console.log('Yes')
//   }else {
//       console.log('No')
//   }
function solution(a) {
    let set = new Set(a.split(""));
    let b= [...set].join("");  
    if(a==b)
        return "Yes"
    else
        return "No"
}
  a='Machine'
  const res = solution(a)
  console.log(res)
