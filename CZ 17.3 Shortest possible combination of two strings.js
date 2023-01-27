/* Shortest possible combination of two strings
String
Close
Given two strings S1 and S2, Compute the shortest string for a combination of two given strings such that the new string consists of both the strings as its subsequences.

 

Input:

    pear

    peach

 

     where:

First Line represents input string S1.
Second line represents input string S2.
 

Output:

    pearch

 

Explanation: 

pearch is the shorted string such that both pear and peach are its subsequences.*/

function solution(a,b) {
    let m=a.length, n=b.length;
    let dp = new Array(m+1)
    for(let i=0;i<m+1;i++)
        dp[i]= new Array(n+1)
        
        for(let i=0;i<=m;i++){
            for(let j=0;j<=n;j++){
                if(i==0)
                    dp[i][j]=j;
                
                    else if(j==0)
                        dp[i][j]=i
                    
                        else if(a[i-1]==b[j-1])
                            dp[i][j]=1+dp[i-1][j-1]
                        
                        else
                            dp[i][j] = 1+Math.min(dp[i-1][j], dp[i][j-1]);
                    }
                }
            
                let ans =" ";
                let i=m, j=n
                while(i>0 && j>0){
                    if(a[i-1]==b[j-1]){
                        ans=a[i-1]+ans;
                        i--;
                        j--;
                    }
                    else if(dp[i-1][j]<dp[i][j-1]){
                        ans=a[i-1]+ans
                        i--;
                    }
                    else{
                        ans=b[j-1]+ans
                        j--
                    }
                }
                while(i>0){
                    ans=a[i-1]+ans
                    i--;
                }
                while(j>0){
                    ans=b[j-1]+ans;
                    j--;
                }
                return ans;
            
  //Write your solution here
}
