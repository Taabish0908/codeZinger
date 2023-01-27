// Find all the prime numbers in the array
// Tags:	Array
// Given an array of integers, find all the prime numbers in the array.
// Input:5
// 2 3 5 7 9
// where:
// First line represents the number of elements in the array.
// Second line represents the elements in the array.
//  Output:2 3 5 7


function solution(a,arr) {
    let arr1 = []
    for (let i =0; i<a; i++){
        if(arr[i] === 2){
            arr1.push(arr[i])
            continue
        }else{
            for(let j=2; j<arr[i]; j++){
                if(arr[i]%j ===0){
                    break
                }else if(j === arr[i]-1){
                    arr1.push(arr[i])
                }
            }
        }
    }
    return arr1  
  }
  arr = [2,3,5,7,9,16]
  a= arr.length
  const res = solution(a,arr)
  console.log(res)




