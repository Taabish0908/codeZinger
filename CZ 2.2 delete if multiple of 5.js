/*Delete from array if multiple of 5
Tags:	Array
Given an array of integers, delete each element from the array which is a multiple of 5, and 
display the rest of the array.
Input:
6
2 3 4 11 22 320
where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Output:
    2 3 4 11 22
Explanation: Element of the array 320 is the only one in the array which is a multiple of 5, 
so it is removed from the array.
Assumptions:
Array can be of size from 1 to 1000.
Array element can be in the range -1000 to 1000. */

function solution(a,arr) {
    var newArr =[];
      for (let i=0; i<arr.length; i++){
         if (arr[i]%5!==0){
             newArr.push(arr[i])
         } 
      }
      return (newArr)
  }
  arr=[2,3,4,11,22,320]
  a= arr.length
  const res= solution(a,arr)
  console.log(res)