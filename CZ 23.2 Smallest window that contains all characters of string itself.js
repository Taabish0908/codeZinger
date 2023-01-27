/*
Smallest window that contains all characters of string itself
String
Close
Given a string S, find the smallest window(substring) length with all distinct characters of the given string.

 

Input:

    aabbcc

 

    where:

First line represents input string S.
 

Output:

    4

 

Explanation:

abbc of length 4 is the smallest window with the highest number of distinct characters.
 

Assumptions:

 Character comparisons will be case-sensitive. */

 function solution(str) {
    const MAX_CHARS = 256;
        let n = str.length;
        if (n <= 1)
            return str;
        
        // count distinct character
        let dist_count = 0;
        let visited = new Array(MAX_CHARS).fill(false);
        for (let i = 0; i < n; i++) {
            if (visited[str.charCodeAt(i)] === false) {
                visited[str.charCodeAt(i)] = true;
                dist_count++;
            }
        }
        
        
        let start = 0
        //let start_index = -1
        let min_len = Number.MAX_VALUE;
        let count = 0;
        
        
        // find min sub string
        let curr_count = new Array(MAX_CHARS).fill(0);
        for (let j = 0; j < n; j++) {		
            curr_count[str.charCodeAt(j)]++;
            if (curr_count[str.charCodeAt(j)] === 1)
                count++;
            if (count === dist_count) {
                while (curr_count[str.charCodeAt(start)] > 1) {
                    if (curr_count[str.charCodeAt(start)] > 1)
                        curr_count[str.charCodeAt(start)]--;
                    start++;
                }
                let len_window = j - start + 1;
                if (min_len > len_window) {
                    min_len = len_window;
                //	start_index = start;
                }
            }
        }
        // return str.substring(start_index, min_len + start_index).length
        return min_len
    
      //Write your solution here
    }