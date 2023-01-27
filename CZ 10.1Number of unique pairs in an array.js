/*  Number of unique pairs in an array
Array
Close
Given an array of N elements, find all the unique pairs that can be formed using the elements of a given array.

 

Input:

    3

    1 1 2

 

    where:

First line represents the number of elements in the array.
Second line represents the elements in the array.
 

Output:

    4

 

Explanation: (1, 1) (1, 2) (2, 1) and (2, 2) are all the unique pairs, their count is 4, hence the output 4. */




function solution(n) {
    
    let s = new Set()

    for(let i=0;i<n.length; i++){
        
            s.add(n[i]);
    }
            let count = s.size;
    return count*count;
    }

    n = [1,1,2]
    console.log(solution(n))