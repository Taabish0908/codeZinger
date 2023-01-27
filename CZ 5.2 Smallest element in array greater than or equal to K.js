/* Smallest element in array greater than or equal to K
Array
Close
Given an array of integers and a number K, find the smallest element in array greater than or equal to K. 
If such element exists in the array, display it otherwise display "-1".

 

Input:

    8

    1 3 4 7 8 9 9 10

    5

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of K.
 

Output:

7
Explanation: Smallest integer in the array greater than or equal to K=5 is 7. */
function solution(arr,k) {
    for(let i=0;i<arr.length; i++){
        if(arr[i]>=k)
            return arr[i]
    }
    return -1;
        
    
            
  //Write your solution here
}
arr=[1,3,4,7,8,9,9,10]
k = 5
const res = solution(arr,k)
console.log(res)
