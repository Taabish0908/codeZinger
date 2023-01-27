/*Absolute difference between first and last element of array
Array
Close
Given an array of integers, find the absolute difference between the first and last element of the array.
Input:
4
1 2 3 4
where:
First line represents the number of elements in the array.
Second line represents the elements of the array.
Output:
3
*/

function solution(a,arr) {
    var diff = arr[0] - arr[a-1];
      return (diff >= 0 ? diff: diff*(-1));
}

arr =[1,2,3,4]
a=arr.length
const res = solution(a,arr)
console.log(res)