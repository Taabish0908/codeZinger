
// var a = 20;{
// let a =10;}
// console.log(a)

// let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };
// let obj1 = Object.keys(obj)
// console.log(obj1)

// let obj2 = Object.values(obj)
// console.log(obj2)

// let obj3 = Object.entries(obj)
// console.log(obj3)


// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }
let n =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const result = fizzBuzz(n)
console.log(result)

function fizzBuzz(n) {
    // Write your code here
    for(let i = 1;  i <= n; i++) {
        
         if(i % 3 == 0 && i % 5 == 0) {
            return'FizzBuzz'
       }
       else if(i % 3 == 0) {
           return'Fizz'
       } else if(i % 5 == 0) {
            return'Buzz'
       } else {
    return i
      }
    }
}

// debugger
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length-1;

// for(let i=0; i<=n/2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[n-i];
//   arr[n-i] = temp;
// }
// console.log(arr);