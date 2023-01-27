/* Minimum changes required to make a given array an Arithmetic Progression
Array
Close
Given an array A of N integers and a number D, find the minimum number of change(s) required to make the given array an Arithmetic Progression with the common difference D. You can change any element of the array to any integer.

 

Input:

    4

    1 2 4 6

    2

 

    where:

First line represents the number of elements in the array.
Second line represents elements in the array.
Third line represents the value of common difference 'D'.
 

Output:

    1

 

Explanation: Change A[0]=0. So, the new sequence is 0, 2, 4, 6 which is an Arithmetic Progression with common difference 2. Since there is only one change required, hence the output 1. */


function solution(arr,d) {
    let count =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i+1] - arr[i] != d){
            count++
        }
        else{
            return count;
        }
    }
    return count-1;
  //Write your solution here
}
let arr = [1,2,4,6]
let d=2
console.log(solution(arr,d))
