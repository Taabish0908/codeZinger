/* 
Find Majority Element
Array
Close
Given an array of integers A, find the [info message="A majority element in an array of size N is an element that appears more than N/2 times."]Majority Element.[/info]

 

Display the Majority Element in the array. If no majority element then display 0. 

 

Input
    5 
    1 2 1 2 2

 

    Where, 

First line represents the size of an array. 
Second line represents array elements separated by single space.
 

Output
    2 

 

Here for the given array, 2 appears 3 times in the array of size 5. */

function solution(a,arr) {
    if(arr.length==1){
  return arr[0]
}

let obj={}
for(let ele of arr){
   if(obj[ele]){
       obj[ele]+=1
   }else{
       obj[ele]=1
   }
 
}
let arr1=Object.entries(obj)
let max=arr1[0][1]
let result;
for(let i=0;i<arr1.length;i++){
    if(arr1[i][1]>=max){
        max=arr1[i][1]
        result=arr1[i][0]
    }
}  if(max==arr1[0][1]){
    return 0
}
    return result
}