/*  Array Balance
ArrayAlgorithm
Close
Given an unsorted array A, check whether the array is [info message="If an array can be split into two parts such that the sum of elements on both the sides is equal."]balanced[/info]. 

 

Display 1 if the array is balanced otherwise 0. 

 

Input
    5 
    1  1  1  2  1 

 

    Where, 

First line represents the size of an array. 
Second line represents array elements. 
 
Output
    1 

 

Here for the given array, the sum of first three elements 1 + 1 + 1 is 3 and last two elements 2 + 1 is 3. Hence the array is balanced. 

   */


function solution(a,arr) {
    let rsum =0
    let lsum=0
    let n=a/2
    if(a%2 !=0){
        n+= 1/2
    }
    for(let i=0;i<n;i++){
        lsum +=arr[i]
    }
    for(let i=a-1;i>=n;i--){
        rsum +=arr[i]
    }
    return lsum == rsum ? 1 : 0
  //Write your solution here
}
