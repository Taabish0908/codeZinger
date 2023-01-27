/*Find the element having different frequency than other array elements
Array
Close
Given an array of N integers where each element in the array occurs the same number of times except one element, find that element.

 

Input:

    5

    1 1 2 2 3

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    3

 

Explanation: Elements 1, and 2 occur two times each but 3 occurs only once, hence the output 3.*/

function solution(a,arr) {
    let element = 0
    for(let i=0;i<a;i++){
        for (let j=i;j<a;j++){
            if(arr[i]==arr[j]){
                element = arr[j]
            }
        }
    }
    return element
  //Write your solution here
}