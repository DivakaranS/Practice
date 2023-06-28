/*
 * Complete the 'maxElement' Function below.
 *
 * The Function is expected to return an INETEGER.
 * The function accepts following parameters:
 * 1.INTEGER n
 * 2.INTEGER maxSum
 * 3.INTEGER k
 */

function maxElement(n, maxSum, k) {
  let s1 = (k * (k + 1)) / 2;
  let s2 = ((n - k - 1) * (n - k)) / 2;
  let maxVal = Math.floor((maxSum + s2 + s1) / n);
  return maxVal;
}

let n = 4;
const maxSum = 6;
const k = 2;

console.log(maxElement(n, maxSum, k));
console.log(maxElement(3, 6, 1));
console.log(maxElement(3, 7, 1));
console.log(maxElement(4, 5, 2));
console.log(maxElement(10, 250, 6));
