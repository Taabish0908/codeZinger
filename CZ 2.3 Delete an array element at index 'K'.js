/*Delete an array element at index 'K'
Array
Close
Given an array of integers, write a program to delete the element at index K.
Input:
5
10 20 30 40 50
1
where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of index K.
Output:
10 30 40 50
Explanation: Output displays the elements of the array after deleting the element at index K=1.*/

function solution(arr,n) {
    let result = [];
      for(let i=0; i<arr.length;i++){
          if(arr[i]!=n){
              result.push(arr[i])
          }
      }
      return result;
  }
  arr =[10,20,30,40,50]
  n=arr[1]
  res = solution(arr,n)
  console.log(res)

