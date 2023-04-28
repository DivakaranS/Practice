const range = (a, b) => Array(b - a).fill().map((e, i) => i + a);

// const isPrimeN = (input) => {
//     if (input === 2) return true;
//     const limit = Math.ceil(Math.sqrt(input)) + 1;
//     return range(2, limit).every(i => input % i !== 0);
// }

// console.log(range(2, 100).filter(isPrimeN));

const cache = {};

const fibo = (m) => {
	console.log(cache);
    if (cache[m] != undefined) return cache[m];
    if (m === 0) return (cache[m] = 0);
    if (m === 1) return (cache[m] = 1);
    return (cache[m] = (fibo(m - 1) + fibo(m - 2)));
};

// console.log(range(2, 10).map(fibo))
console.log(range(0, 10).map(e => fibo(e)));

// const jajaIsPrime = (n) => {

//     return isPrime(range(2, n)
//         .filter(isPrime)
//         .map(ele => Math.pow(ele, 2))
//         .reduce((acc, cur) => acc + cur, 0) + 101)
// };
// /*
// n = 10
// x = [2, 3, 5, 7]
// y = [4, 9, 25, 49]
// z = 4 + 9 + 25 + 49
// a = z + 101
// prime? a
// */
// console.log(range(2, 101).filter(ele => jajaIsPrime(ele)));



// const multiple3or5 = (n) => {
//     let result = 0;
//     for (var i = 0; i < n; i++) {
//         if (i % 3 == 0 || i % 5 == 0) {
//             result += i;
//         }
//     }
//     // console.log(result);
//     // return result.reduce((a,c)=> a+c);
//     return result;
// }

// console.log(multiple3or5(1000));

// const evenFibo = () => {

//     let sum = 0,
//         n1 = 1,
//         n2 = 2,
//         m = 0;

//     while (m < 4000000) {
//         if (n2 % 2 == 0) {
//             sum += n2;
//         }
//         m = n1 + n2;
//         n1 = n2;
//         n2 = m;
//     }

//     return sum;

// }


// console.log(evenFibo())


// const largestPrimeFactor = (input) => {
//     let factor = [];
//     for (var i = 2; i <= input; i++) {
//         while (input % i === 0) {
//             factor.push(i);
//             console.log(input / i);
//             input /= i;
//         }
//     }
//     return factor;
// }

// console.log(largestPrimeFactor(600851475143));


// const largestPalindromeProduct = () => {

//     function Palindrome(x) {
//         var pal = parseInt(x.toString().split('').reverse().join(''));
//         return pal === x ? true : false;
//     }
//     var x, y, product, max = 0;

//     for (x = 999; x >= 100; x--) {
//         for (y = x; y >= 100; y--) {
//             product = x * y;
//             if (Palindrome(product)) {
//                 if (max < product) {
//                     max = product;

//                 }
//             }
//         }
//     }
//     return max;
// }

// console.log(largestPalindromeProduct());


// const smallestMultiple = (input) => {
//   // Initialize variables
//   let lcm = 1;
//   let factor = 2;

//   // Loop through numbers 2 to 20
//   while (factor <= 20) {
//     // Check if factor is a prime number
//     if (isPrime(factor)) {
//       // Determine highest power of factor that divides into 20
//       let power = 1;
//       while (factor ** power <= 20) {
//         power++;
//       }
//       // Multiply lcm by factor raised to highest power
//       lcm *= factor ** (power - 1);
//     }
//     // Increment factor
//     factor++;
//   }
//   // Return LCM
//   return lcm;
// }

// function isPrime(num) {
//   // Check if num is 2 or 3
//   if (num === 2 || num === 3) {
//     return true;
//   }
//   // Check if num is divisible by 2 or 3
//   if (num % 2 === 0 || num % 3 === 0) {
//     return false;
//   }
//   // Check if num is divisible by other odd numbers
//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }
//   // If num is not divisible by any number up to its square root, it is prime
//   return true;


// }

// console.log(smallestMultiple());

// const sumSquareDifference = () => {
//   return Math.pow(range(1,101).reduce((acc,cur) => acc + cur),2)-range(1,101).map(e => Math.pow(e,2)).reduce((acc,cur) => acc + cur); 
// }

// console.log(sumSquareDifference())


// const isPrimeN = (input) => {
//     if (input === 2) return true;
//     const limit = Math.ceil(Math.sqrt(input)) + 1;
//     return range(2, limit).every(i => input % i !== 0);
// }

// console.log(range(2, 110000).filter(isPrimeN)[10000]);

// const LargestProductSeries = () => {

//     const groupSize = 13;

//     const series = `73167176531330624919225119674426574742355349194934
//                     96983520312774506326239578318016984801869478851843
//                     85861560789112949495459501737958331952853208805511
//                     12540698747158523863050715693290963295227443043557
//                     66896648950445244523161731856403098711121722383113
//                     62229893423380308135336276614282806444486645238749
//                     30358907296290491560440772390713810515859307960866
//                     70172427121883998797908792274921901699720888093776
//                     65727333001053367881220235421809751254540594752243
//                     52584907711670556013604839586446706324415722155397
//                     53697817977846174064955149290862569321978468622482
//                     83972241375657056057490261407972968652414535100474
//                     82166370484403199890008895243450658541227588666881
//                     16427171479924442928230863465674813919123162824586
//                     17866458359124566529476545682848912883142607690042
//                     24219022671055626321111109370544217506941658960408
//                     07198403850962455444362981230987879927244284909188
//                     84580156166097919133875499200524063689912560717606
//                     05886116467109405077541002256983155200055935729725
//                     71636269561882670428252483600823257530420752963450`.replace(/[^\d]/g, '').split('').map(c => parseInt(c));

//     return Math.max(...range(0, series.length - groupSize + 1)
//         .map(i => series.slice(i, i + groupSize))
//         .map(groupArr => groupArr.reduce((acc, cur) => acc * cur)));

// }
// console.log(LargestProductSeries());

// const SpecialPythagoreanTriplet = () => {
//          for(var a=1;a<1000/3;a++){
//             for(var b=a+1;b<1000/2;b++){
//                 var c = 1000 - a - b;
//                   if(a*a + b*b == c*c){
//                     console.log(a,b,c);
//                     return a*b*c;
//                   }
//             }
//          }
// }
// console.log(SpecialPythagoreanTriplet());
/*project euler 10*/
// const SummationOfPrimes = () => {
// const isPrimeN = (input) => {
//     if (input === 2) return true;
//     const limit = Math.ceil(Math.sqrt(input)) + 1;
//     return range(2, limit).every(i => input % i !== 0);
// }

// console.log(range(2,2000000).filter(isPrimeN).reduce((acc,cur)=>acc+cur));

// }
// console.log(SummationOfPrimes())






















