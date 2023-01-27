/*Array manipulations and sum
Array
Close
Given an array of N integers and an integer M.

Find an element K in the array such that if all the elements from the array that are greater than
 K are made equal to K then the sum of all the elements of the resultant array becomes equal to M.

If it is not possible to find such an element then display -1.

 

Input:

    5

    12 3 6 7 8

    15

    

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
Third line represents the value of M.
 

Output:

    3
Explanation: Resultant array = {3, 3, 3, 3, 3}, Sum of the array elements = 15 = M, hence the output 3. */

function solution(arr ,m) {
    
    for(let i=0; i<arr.length; i++){
        let sum =0;
        for(let k =0; k<arr.length; k++){
            if (arr[k] <= arr[i])
                sum+=arr[k]
            else
                sum+=arr[i]
            
        }
            if(sum==m)
            return arr[i]
        }
  return -1;
}
arr = [12,3,6,7,8]
m=15
const res= solution(arr,m)
console.log(res)