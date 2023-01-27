/*  Check whether the array is palindromic or not
Array
Close
Given an array of integers, find whether it is Palindromic or not. 
Display "Yes" if the array is palindromic otherwise display "No".
An array is Palindromic only when read in reverse order gives the same result as in normal order.
Input:
5
3 6 0 6 3
where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Output:
Yes
Explanation: Normal order reading of elements: 3 6 0 6 3
Reverse order reading of elements: 3 6 0 6 3, as both the orders are same, 
the array is Palindromic, hence the output "Yes". */

function solution(arr) {
    // const palindrome=arr.length;
      let palindrome = arr.length-1;
      
      for(let i=0;i<palindrome/2;i++){
          let x =arr[i];
          let y =arr[palindrome-i];
          if(x != y){
              return 'No';
          }
      }
      return 'Yes';
  }
arr=[3,6,0,6,3]
const res = solution(arr)
console.log(res)