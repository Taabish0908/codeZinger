/* Find the frequency of digits in a number
Do While LoopFor LoopLoopWhile Loop
Close
Given a number N, find the frequency of digits in N using loop.

 

Input:
    12553451

 

    where:

First line represents value of N.
 

Output:
    1 2

    2 1 

    3 1

    4 1

    5 3*/

    function solution(a) {
        let c=a.toString()
        let arr = c.split("")
        let obj ={}
        for(let element of arr){
            if(obj[element]){
                obj[element]+=1
            }
            else{
                obj[element]=1
            }
        }
        for(let key in obj){
            console.log(key,obj[key])
        }
      //Write your solution here
    }
    