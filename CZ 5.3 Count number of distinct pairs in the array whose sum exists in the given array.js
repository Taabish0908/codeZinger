/* Count number of distinct pairs in the array whose sum exists in the given array
Array
Close
Given an array A of N positive integers, find the number of distinct pairs (A[i], A[j]) whose sum exists in the given array for all 0 ≤ i < j < N.

Note: While repeating pairs will not be counted again. And we can’t make a pair using the same elements again. Eg : (2, 1) and (1, 2) will be considered as only one pair.

 

Input:

    7

    1 5 6 4 -1 5 10
where:
First line represents the number of elements in the array
Second line represents the elements in the array.
Output:
6
Explanation: Here there are 6 pairs: (1 + 5) = 6, (1 + 4) = 5, (5 + -1) = 4, (5 + 5)=10,(6 + 4)=10, (6 + -1) = 5.
Here (1 + 5) comes twice will be considered as only one pair.
Also (-1 + 5) is not distinct as (5 + -1) has occurred, hence considered one pair. */
function solution(a,arr) {
    let pair = []
    for(let i=0;i<a-1;i++){
        for(let j=i+1;j<a;j++){
            for(let k=0;k<a;k++){
                if(arr[i]+arr[j]==arr[k]){
                    if(arr[i]<=arr[j])
                        pair.push("("+arr[i]+arr[j]+")")
                    else pair.push("("+arr[j]+arr[i]+")")
                }
            }
        }
    }

    let result = pair.filter((num,index)=>pair.indexOf(num)==index)
    return result.length
  //Write your solution here
}
arr = [1,5,6,4,-1,5,10]
a=arr.length
const res = solution(a,arr)
console.log(res)