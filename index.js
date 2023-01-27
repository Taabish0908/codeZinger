function solution(a,arr) {
    debugger
    let result = 0;
    for(i=0; i<a; i++) {
        for(j=i; j<a; j++) {
            if(arr.charAt(i) == arr.charAt(j)){
                result++;
            }
        }
    }
    return result;
}

let arr = "abcab";
let a= arr.length;
const res = solution(a,arr)
console.log(res)