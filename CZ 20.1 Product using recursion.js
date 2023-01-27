/* Product using recursion
FunctionRecursion
Close
Given two integers N1 and N2, find the product between them using recursion. 

 

Write a function that accepts integers N1 and N2. The function should return product of N1 and N2 using recursion. 

 

Input:

    20

    15

 

    where:

First line represents number N1
Second line represents number N2
 

Output:

    300*/

    
function solution(N1, N2) {
    if (N1 < N2)
        return solution(N2, N1);
    else if (N2 != 0)
        return (N1 + solution(N1, N2 - 1));
    else
        return 0;
  //Write your solution here
}