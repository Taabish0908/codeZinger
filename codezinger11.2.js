function solution(a,arr){
    debugger
    let b=[-1]
    for(let i=0;i<arr-1;i++){
        b.push(a[i])

    }
    return b.join(" ")
}
let a=[1,2,3,4];
let arr=a.length;
const result = solution(a,arr);
console.log(result)