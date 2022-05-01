#include <bits/stdc++.h>
using namespace std;

void solution(int N, vector<int> arr)
{
    for (int i = N - 1; i > 0; i--)
    {
        if (arr[N - 1] > arr[i])
        {
            int temp = arr[i];
            arr[i] = arr[N - 1];
            arr[N - 1] = temp;

            sort(arr.begin() + i + 1, arr.end());

            for (int i = 0; i < arr.size(); i++)
            {
                cout << arr[i] << " ";
            }
        }
    }

    reverse(arr.begin(), arr.end());

    for (int i = 0; i < arr.size(); i++)
    {
        cout << arr[i] << " ";
    }
}

int main()
{
    vector<int> v = {1, 4, 3, 2};
    solution(v.size(), v);
    return 0;
}
