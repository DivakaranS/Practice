function minOperations(arr, threshold, d) {
  const dp = new Map(); // Use Map instead of defaultdict in JavaScript
  arr.sort((a, b) => a - b);
  let ans = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    let steps = 0;

    while (true) {
      if (!dp.has(x)) {
        dp.set(x, [0, 0]);
      }
      dp.get(x)[0]++;
      dp.get(x)[1] += steps;

      if (dp.get(x)[0] >= threshold) {
        ans = Math.min(ans, dp.get(x)[1]);
      }

      if (x === 0) {
        break;
      }

      x = Math.floor(x / d);
      steps++;
    }
  }
  return ans;
}

let arr = [64, 30, 25, 33];
let threshold = 2;
let d = 2;
console.log(minOperations(arr, threshold, d));
console.log(minOperations([1, 2, 3, 4], 4, 3));
console.log(minOperations([1, 2, 3, 4, 5], 3, 2));
