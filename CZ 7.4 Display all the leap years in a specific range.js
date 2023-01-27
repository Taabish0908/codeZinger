/*Display all the leap years in a specific range
Loop
Close
Given a year N, display all the leap years from 1 to N.

 

Input:
    50

 

    where:

First line represents the value of N.
 

Output:
    4 8 12 16 20 24 28 32 36 40 44 48

 

Assumptions:

N can be in the range 0 to 3000. */

function solution(a) {
    //Write your solution here
      let ly = []
      for(let i=1;i<a;i++){
          if((i%100 !=0)&&(i%4 ==0)){
              ly.push(i)
          }
      }
      return ly
  }
a=50;
const res = solution(a)
console.log(res)  