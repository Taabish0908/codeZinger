/*Count the unique elements in array
Array
Close
Given an array of integers A, count the number of unique values in the array. Do not use system function to find the unique number. 

 

Input
    10 
    1 2 3 1 4 2 5 6 7 8 

 

    where, 

First line represents the size of an array. 
Second line represents array elements. 
 

Output
    6 

 

Here in the given array, unique values are [3 4 5 6 7 8] hence the result is 6.  */

function solution(arr,a) {
    //Write your solution here
      let newMap= new Map()
      for(let i=0; i<a; i++){
  
          if(newMap.has(arr[i])){
              newMap.set(arr[i],newMap.get(arr[i])+1);
          }
          else newMap.set(arr[i],1);
      }
      
     //return newMap
      let count=0
      for (let pair of newMap){
          if(pair[1]==1){
      
              count++
          }
       }
      return count
  }
  