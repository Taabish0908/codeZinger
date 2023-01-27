/* Find length of string without using inbuilt string method
String
Close
Given a string S, find the length of S without using an inbuilt string method. 

 

Input 
    Codezinger University 

 

Output 
    21 

 

Assume that, 

The length of string S is within the range [0 to 10000]. */


function solution(a) {
    var length =0
    while(a[length] != undefined)
        length++;
    return length;
  //Write your solution here
}

a = 'Codezinger University'
console.log(solution(a))