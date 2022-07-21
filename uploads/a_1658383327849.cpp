#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define vi vector<int>
#define FOR(i, s, N) for (ll i = s; i < N; i++)
#define inA(A, n) FOR(i, 0, n) cin >> A[i]
#define F first
#define S second
#define PB push_back
#define MP make_pair
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    int t;
    cin >> t;
    while (t--)
    {
        int n, m;
        cin >> n >> m;
        vector<pair<int, int>> YX;
        FOR(i, 0, m)
        {
            int x, y;
            cin >> x >> y;
            YX.push_back({y, x});
        }
        sort(YX.begin(), YX.end());
        int i = 1;
        bool notPoss = 0;
        vector<int> ans(n + 1, -1);
        set<int> nums;
        FOR(K, 1, n + 1)
        {
            nums.insert(K);
        }
        FOR(j, 0, m)
        {
            if (i > YX[j].first)
            {
                notPoss = 1;
                break;
            }
            while (i != YX[j].first)
            {
                ans[i] = *nums.begin();
                nums.erase(*nums.begin());
                i++;
            }
            if (nums.find(YX[j].second) != nums.end())
            {
                ans[i] = YX[j].second;
            }
            else
                ans[i] = *nums.begin();
            nums.erase(ans[i]);

            i++;
        }

        if (notPoss)
        {
            cout << "-1\n";
            continue;
        }
        auto it = nums.begin();
        while (i != n + 1)
        {
            ans[i] = *it;
            it++;
            i++;
        }
        FOR(j, 1, n + 1)
        cout << ans[j] << ' ';
        cout << endl;
    }
    return 0;
}