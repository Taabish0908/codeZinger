/*
Check if max occurring character of one string appears same number of times in other
String
Close
Given two strings S1 and S2, write a program to find the character which has the maximum occurrence in the first string S1 and check whether that particular character is present in the second string S2 the same number of times as it is present in the first string S1.

 

Input:

    hello world

    albcllsyaaaaaaaa

 

    where:

First line represents S1
Second line represents S2
 

Output:

    Yes

 

Explanation:

'l' has highest frequency of 3 in S1 and it appears 3 times in S2. */

function solution(a,b) {
    //Write your solution here
    let obj1 = {}
    let obj2 = {}
    
    for(let key of a){
        if(obj1[key]){
            obj1[key] +=1
        }else if( key == ' '){
            continue;
        }else{
            obj1[key] = 1
        }
    }
      
       for(let key of b){
        if(obj2[key]){
            obj2[key] +=1
        }else if( key == ' '){
            continue;
        }else{
            obj2[key] = 1
        }
    }
      let compare = Object.entries(obj1)
      let max = 0
      let cha = null
    
      for(let i=0;i<compare.length;i++){
          if(compare[i][1]>max){
              max = compare[i][1]
                cha = compare[i][0]
          }
      }
      if(obj2[cha]){
          if(obj2[cha] == max){
              return "Yes"
          }
      }
      return "No"  
  }
  