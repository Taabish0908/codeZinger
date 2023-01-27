/* Reverse string according to number of words
String
Close
Given a string S containing a number of words. If the count of words in the string S is even then reverse its even position’s words else reverse its odd position, push reversed words at the starting of a new string and append the remaining words as it is in order.

 

Input:

    Ashish Yadav Abhishek Rajput Sunil Pundir

 

    where:

First line represents the input string S
 

Output:

    ridnuP tupjaR vadaY Ashish Abhishek Sunil

 

 

Input:

    Ashish Yadav Abhishek Rajput Sunil Pundir Prem

 

Output:

merP linuS kehsihbA hsihsA Yadav Rajput Pundir */
function solution(a) {
    //Write your solution here
      let arr = [];
      let arr1  = [];
      if(a.length%2 ==0){
          for(let i=0; i<a.length; i++){
              if((a.length-i)%2 !=0){
                  arr.push(a[a.length-i].split("").reverse().join(""))
              } else {
                  arr1.push(a[i])
              }
          }
          
      } else{
          for(let i=0; i<a.length; i++){
              if(i%2 !=0){
                  arr1.push(a[i])
              } else{
                  arr.push(a[a.length-i-1].split("").reverse().join(""))
              }
          }
      }
      return[...arr, ...arr1].join(" ");
  }
  
  a=['Ashish','Yadav','Abhishek','Rajput','Sunil','Pundir']
  const res = solution(a)
  console.log(res)