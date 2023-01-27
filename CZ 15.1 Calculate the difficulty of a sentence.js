/* Calculate the difficulty of a sentence
String
Close
Given a string S, find the difficulty of the given string. Here a Word is considered hard if it has 4 consecutive consonants or number of consonants is more than the number of vowels. Else word is easy. Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).

 

Input:

    Difficulty of sentence

 

    where:

First line represents input string S.
 

Output:

     13

 

Explanation:

Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13  */

function solution(a) {
    a = a.toLowerCase()
    const vowels = {a:1,e:1,i:1,o:1,u:1}
    let hard =0
    let easy =0
    let v =0
    let c=0
    let con =0
    for(let i=0;i<a.length;i++){
        if(vowels[a[i]]){
            v++
            if(con<4){
                con=0
            }
        }else if(!vowels[a[i]] && a[i] !== " "){
            c++
            con++
        }
        if(a[i]===" "||i==(a.length-1)){
            if(c>v ||con>=4){
                hard++
            }else{
                easy++
            }
            v=0
            c=0
        }
    }
    return(hard*5)+(easy*3)
  //Write your solution here
}
