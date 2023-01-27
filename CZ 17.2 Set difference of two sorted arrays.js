/*Set difference of two sorted arrays
Array
Close
Given two sorted arrays of distinct elements, find those elements from both arrays that are not common. The output should be displayed in sorted order.

 

Input:

    3

    10 20 30

    5

    20 25 30 40 50

    

    where:

First line represents the number of elements in the first array.
Second line represents the elements of the first array.
Third line represents the number of elements in the second array.
Fourth line represents the elements of the second array.
 

Output:

    10 25 40 50

   

Explanation: The output displays the uncommon elements in both the arrays. Also, the elements of the output array are in sorted order.

 

Assumptions:

Array can be of a size from 1 to 1000.
Array element can be in the range -1000 to 1000.
 */

function solution(a,arr1,b,arr2) {
    let obj1 = {}
    for(let i=0;i<a;i++){
        obj1[arr1[i]] =1
    }
    let obj2={}
    for(let j=0;j<b;j++){
        obj2[arr2[j]]=1
    }
    for(let key in obj1){
        if(key in obj2){
            delete obj1[key]
            delete obj2[key]
        }
    }
    for(let key in obj2){
        obj1[key]=1
    }
    let sortedArr =[]
    for(let key in obj1){
        let array = new Array(obj1[key]).fill(Number(key))
        sortedArr = [...sortedArr,...array]
    }
    return sortedArr.join(' ')
  //Write your solution here
}
