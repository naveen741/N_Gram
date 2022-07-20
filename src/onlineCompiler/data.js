export const data = [{
    id:1,
    isInput: true,
    question:<div><h2>Subarray with given sum</h2>
            <p>Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
            In case of multiple subarrays, return the subarray which comes first on moving from left to right.</p>    
            <h3>Example 1:</h3>
            <h4>Input:</h4>
            <p> N = 5, S = 12
                A[] = {`{1,2,3,7,5}`}</p>
            <h4>Output: 2 4</h4>
            <p>Explanation: The sum of elements 
            from 2nd position to 4th position 
            is 12.</p>
            <h3>Example 2:</h3>
            <h4>Input:</h4>
            <p>N = 10, S = 15, A[] = {`{1,2,3,4,5,6,7,8,9,10}`}</p>
            <h4>Output: 1 5</h4>
            <p>Explanation: The sum of elements 
            from 1st position to 5th position
            is 15.</p>
            <h3>Your Task:</h3>
            <p>You don't need to read input or print anything. The task is to complete the function subarraySum() which takes arr, N and S as input parameters and returns an arraylist containing the starting and ending positions of the first such occurring subarray from the left where sum equals to S. The two indexes in the array should be according to 1-based indexing. If no such subarray is found, return an array consisting only one element that is -1.</p>
            <h3>Expected Time Complexity: O(N)</h3>
            <h3>Expected Auxiliary Space: O(1)</h3>
            <h3>Constraints:</h3>
            <p>${`1 <= N <= 105`}</p>
            <p>${`1 <= Ai <= 109`}</p>
            </div>,
    answer:`import java.util.ArrayList;

    import java.util.*;
    import java.lang.*;
    import java.io.*;
    
    public class Main{
    public static void main(String[] args) {
           Scanner sc = new Scanner(System.in);
           int n = sc.nextInt();
           int s = sc.nextInt();
    
           int[] m = new int[n];
           for (int j = 0; j < n; j++) {
               m[j] = sc.nextInt();
           }
           
           Solution obj = new Solution();
           ArrayList<Integer> res = obj.subarraySum(m, n, s);
           for(int ii = 0;ii<res.size();ii++)
               System.out.print(res.get(ii) + " ");
       }
    
    }// } Driver Code Ends
    
    
    class Solution
    {
       //Function to find a continuous sub-array which adds up to a given number.
       static ArrayList<Integer> subarraySum(int[] arr, int n, int s) 
       {
           ArrayList<Integer> a=new ArrayList<Integer>();
           for(int i=0;i<=n-1;i++)
           {
               if(s==arr[i])
               {
                   a.add(i+1);
                   a.add(i+1);
                   return a;
               }
               int sum=arr[i];
               for(int j=i+1;j<n&&sum<s;j++)
               {
                   sum+=arr[j];
                   if(sum==s)
                   {
                       a.add(i+1);
                       a.add(j+1);
                       return a;
                   }
               }
           }
           a.add(-1);
           return a;
       }
    }`,
    TestCase:[{
        input:`10\n15\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10`
    },{
        input:`5\n12\n1\n2\n3\n7\n5`
    }]
}]