function solution(a,n){
    debugger
    let s = new Set();
    for(let i=0;i<n.length;i++){
        s.add(n[i]);
    }
    let count = s.size;
    return count*count;
}

let n=[1,1,2];
let a=n.length;
const result = solution(a,n);
console.log(result)