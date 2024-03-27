const backTracking = (
  n: number,
  k: number,
  i: number,
  path: Array<number>,
  result: Array<Array<number>>
) => {
  if (path.length === k) {
    result.push(Array.from(path));
    return;
  }
  for (let j = i; j <= n; j++) {
    path.push(j);
    backTracking(n, k, j + 1, path, result);
    path.pop();
  }
  return result;
};

const unionList = backTracking(10, 5, 1, [], []);

// console.log(unionList);

// 数组
const backTrackingV2 = (
  list: Array<any>,
  k: number,
  startIndex: number,
  path: Array<any>,
  result: Array<Array<any>>
) => {
  const uniqueList = Array.from(new Set(list));
  if (path.length === k) {
    result.push(Array.from(path));
    return;
  }
  for (let i = startIndex; i < uniqueList.length; i++) {
    path.push(uniqueList[i]);
    backTrackingV2(uniqueList, k, i + 1, path, result);
    path.pop();
  }
  return result;
};

const unionListV2 = backTrackingV2(
  [1, 3, 5, 7, '7', '5', 'A', 'B'],
  2,
  0,
  [],
  []
);

// console.log(unionListV2);

// 剪枝
let times = 0;
const backTrackingV3 = (
  n: number,
  k: number,
  i: number,
  path: Array<number>,
  result: Array<Array<number>>
) => {
  if (path.length === k) {
    times++;
    result.push(Array.from(path));
    return;
  }
  for (let j = i; j <= n - (k - path.length) + 1; j++) {
    path.push(j);
    times++;
    backTrackingV3(n, k, j + 1, path, result);
    path.pop();
  }
  return result;
};

const result = backTrackingV3(4, 3, 1, [], []) as any;

console.log(result, times);

export default backTracking;
