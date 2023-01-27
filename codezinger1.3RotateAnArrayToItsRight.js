// Rotate an array to right side
// Array
// Given an array of integers, write a program to rotate the array to the right side K times.
// Input:
// 10
// 10 20 30 40 50 60 70 80 90 100
// 3
// where:
// First line represents the number of elements in the array.
// Second line represents the elements in the array.
// Third line represents the value of K( Number of times to rotate the array to right side )
// Output:
// 80 90 100 10 20 30 40 50 60 70
// Explanation: Output displays the array after rotating K=3 times to the right side.

function solution(arr,n){
    debugger
    for(let i=0;i<n;i++){
       let element = arr.pop();
        arr.unshift(element)

    }
    return arr.join(" ")

}

arr= [10 ,20, 30, 40, 50, 60, 70, 80, 90, 100]

n=3

console.log(typeof(str))
const result= solution(arr,n)
console.log(result,typeof(arr))


// function solution(a,arr,k) {
//     debugger
//     let result = [];
//     k= k% a;
    
//     for(let i=0; i<a; i++) {
//         result[(i+k) % a] = arr[i];
//     }
//     for(let i=0; i<a; i++) {
//         arr[i]=result[i]
//     }
//     return arr
// }

// let arr = [10,20,30,40,50,60,70,80,90,100]
// let a = arr.length
// let k =3;
// const res = solution(a,arr,k)
// console.log(res)