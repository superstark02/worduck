#include <bits/stdc++.h>
using namespace std;

int binarySearch(vector<int> nums, int target, int L, int R, bool left_bias)
{
    int i = -1;
    while(L<=R){
        int M = (L + R) / 2;
        
        if(nums[M] == target){
            //return M;
            i = M;
            if(left_bias){
                R = M-1;
            }
            else{
                L = M+1;
            }
        }
        else if(nums[M] < target){
            L = M + 1;
        }
        else if(nums[M] > target){
            R = M - 1;
        }
    }

    return i;
}

int main()
{
    vector<int> nums = {5, 7, 7, 8, 8, 10};
    int start = binarySearch(nums, 8, 0, nums.size() - 1, true);
    int end = binarySearch(nums, 8, 0, nums.size() - 1, false);
    cout << start << " " << end;
    return 0;
}
