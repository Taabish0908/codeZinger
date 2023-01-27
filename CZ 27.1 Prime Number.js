/* Prime Number
LoopNumber
Close
Given an integer, find whether the number is a [info message="A prime number is a whole number greater than 1, whose factors are two whole-number 1 and itself."]Prime number[/info] or not. 

 

Display 1 if N is prime else 0. 

 

Input
    11 

 

Output
    1 

 

11 can be divided exactly by 1 and 11. Hence it's a prime number.*/

function solution(a) {
    if(a==0 ||a== 1) return 0;
    for(let i =2;i<a/2;i++){
        if(a%i == 0){
            return 0;
        }  
    }
    return 1
}
