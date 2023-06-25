export const fun = (a, n) => {
  a.sort((x, y) => x - y);

  let p = 0,
    q = n - 1,
    ans = [];
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 2 == 0) {
      ans[i] = a[q--];
    } else {
      ans[i] = a[p++];
    }
  }
  return ans;
};

// References
// 1-https://www.geeksforgeeks.org/rearrange-array-such-that-even-positioned-are-greater-than-odd/
