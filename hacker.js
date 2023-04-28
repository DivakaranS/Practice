// function processData(input) {
//     //Enter your code here
//     var strArray = input.split("\n");
//     strArray.shift();
//     var array = strArray.map(str => {
//         let insideArr = str.split(" ");
//         insideArr[1] = Number(insideArr[1]);
//         return insideArr;
//     });

//    array.sort((a,b) => {
//        if (a[1] > b[1]) {
//         return -1;
//     } else if (a[1] < b[1]) {
//         return 1;
//     } else {
//       let names = [a[0], b[0]];
//       names.sort();
//       if (names[0] === a[0]) {
//         return -1
//       } else {
//         return 1;
//       }
//     }
//     })

//     const joinArray = array.map(arr=> {
//         return arr.join(" ");
//     }) 
// let result = joinArray.join("\n");
// console.log(result);

// } 


// //  let outerSplit = input.split('\n');
// //   outerSplit.shift();
// //   // console.log(outerSplit);

// //   let fullSplit = outerSplit.map(str => {
// //     let innerArray = str.split(' '); 
// //     innerArray[1] = Number(innerArray[1]);
// //     return innerArray;
// //   });
// //   // console.log(fullSplit);

// //   fullSplit.sort((a,b) => {
// //     if (a[1] > b[1]) {
// //       return -1;
// //     } else if (a[1] < b[1]) {
// //       return 1;
// //     } else {
// //       let names = [a[0], b[0]];
// //       names.sort();

// //       if (names[0] === a[0]) {
// //         return -1
// //       } else {
// //         return 1;
// //       }
// //     }
// //   });
// //   // console.log(fullSplit);

// //   const innerJoin = fullSplit.map(innerArr => {
// //     return innerArr.join(' '); 
// //   });
// //   // console.log(innerJoin);

// //   let result = innerJoin.join("\n");
// //   console.log(result);
// // }


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data",function (input){
// 	_input += _input;
// });
// process.stdin.on("end", function () {
//    processData(_input);
// });


// function countInversions(arr) {
//     // Write your code here
//    let count = 0;
//    mergeArray(arr);
//    function mergeArray(array){
//      if(array.length < 2) return array;
//      const mid = Math.ceil(array.length / 2);
//      const left = mergeArray(array.slice(0,mid));
//      const right = mergeArray(array.slice(mid));
//      let k = array.length-1;
//         for(let i=left.length-1; i>=0; i--){
//             for(let j=right.length-1; j>=0; j--){
//                 if(left[i] <= right[j]){
//                 left[k--] = right[j--];                
//                 }else{
//                 count +=j+1;
//                 left[k--] = left[i--];
//                 }
//             }
//         }
//         return left;
//     }
//     return count;
// }

// var arr=[1,1,1,2,2,2];
// countInversions(arr);

// function countInversions(arr) {
//   let count = 0n;
//   mergeSort(arr);

//   function mergeSort(input) {
//     if (input.length < 2) return input;
//     const mid = Math.ceil(input.length / 2);
//     const left = mergeSort(input.slice(0, mid));
//     const right = mergeSort(input.slice(mid));
//     let k = input.length - 1,
//       i = left.length - 1,
//       j = right.length - 1;

//     while (i >= 0 && j >= 0) {
//       if (left[i] <= right[j]) {
//         left[k--] = right[j--];
//       } else {
//         count += j + 1;
//         left[k--] = left[i--];
//       }
//     }
//     while (j >= 0) {
//       left[k--] = right[j--];
//     }
//     return left;
//   }
//   return count;
// }


// function minimumAbsoluteDifference(arr) {
//     // Write your code here
//     var result = Infinity;
//     arr.sort((a,b)=> a-b);

//     for(let i=1;i<arr.length;i++){

//       result = Math.min(result,Math.abs(arr[i] - arr[i - 1]));       
//     }
//     console.log(result);
// }

// var arr=[1,-3,71,68,17];
// minimumAbsoluteDifference(arr);
// let minAbDif = Infinity;
//  arr.sort((a, b) => a - b);
//  for (let i = 1; i < arr.length; i++) {
//    minAbDif = Math.min(minAbDif, Math.abs(arr[i] - arr[i - 1]));
//  }
//  return minAbDif;



// function luckBalance(k, contests) {
//     // Write your code here
//     let luck = 0;
//     const sortedContests = contests.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
//     sortedContests.forEach(([a, b]) => {
//         const importance = b;
//         const luckValue = a;
//         if (k > 0 && importance === 1) {
//             luck += luckValue;
//             k--;
//         } else if (importance === 1) {
//             luck -= luckValue;
//         } else {
//             luck += luckValue;
//         }

//     });
//     return luck;

// }


// var k = 3;
// var contests = [
//     [5, 1],
//     [2, 1],
//     [1, 1],
//     [8, 1],
//     [10, 0],
//     [5, 0]
// ];

// luckBalance(k, contests);
// function luckBalance(k, contests) {
//   // Write your code here
//   const sortedContests = contests.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
//   let luck = 0;

//   for (let i = 0, len = contests.length; i < len; i++) {
//     const importance = sortedContests[i][1];
//     const luckValue = sortedContests[i][0];

//     if (k > 0 && importance === 1) {
//         luck += luckValue
//         k--;
//     } else if (importance === 1) {
//         luck -= luckValue
//     } else {
//         luck += luckValue
//     }
//   }

//   return luck;
// }

// function getMinimumCost(k, c) {
//     c.sort((a,b)=> a-b);
//     let totalPrice = 0;
//     for(var i=0;i<c.length;i++){
//         totalPrice += c[c.length - 1 - i] * (Math.floor(i / k) + 1);
//     }

//     console.log(totalPrice);

// }


// var k = 3;
// var c = [1,3,5,7,9];
// getMinimumCost(k,c);








// function getMinimumCost(k, c) {
//     c.sort((x, y) => x - y);
//     let total = 0;
//     for (let i = 0; i < c.length; i++) {
//         total += c[c.length - 1 - i] * (Math.floor(i / k) + 1);
//     }
//     return total;
// }

// function maxMin(k, arr) {
//     // Write your code here
//    const sortedArray = arr.sort((x,y) => x-y);
//    const set = k - 1;
//    let atLeastUnfair;

//    for(var i=0;i<arr.length - set ;i++){
//     console.log(sortedArray[i + set] - sortedArray[i])
//     const unfair = sortedArray[i + set] - sortedArray[i];
//     if(i === 0 || unfair < atLeastUnfair){
//         atLeastUnfair = unfair;
//     }
//    }
//    return atLeastUnfair;
// }

// var arr =[10,100,300,200,1000,20,30]
// var k = 3;
// maxMin(k,arr);

// function maxMin(k, arr) {
//     // Write your code here
//   const sortedArr = arr.sort((a, b) => a - b);
//   const offset = k - 1;
//   let leastUnfair;

//   for (let i=0, len=arr.length; i < len - offset; i++) {
//     const unfairness = sortedArr[i + offset] - sortedArr[i];
//     if (i === 0 || unfairness < leastUnfair) {
//         leastUnfair = unfairness;
//     }
//   }

//   return leastUnfair;
// }


// function reverseShuffleMerge(s) {
//     let shuf = {};
//     s = s.split('').reverse('').join('');
//     for (let item of s.split('')) {
//         shuf[item] = shuf[item] ? shuf[item] + 1 : 1;
//     }
//     let ref = {};
//     for (let key in shuf) {
//         ref[key] = shuf[key] / 2;
//     }
//     let finalStr = [],
//         i = 0;
//     while (finalStr.length < s.length / 2) {
//         let minChar = -1
//         while (true) {
//             let c = s[i];

//             if (ref[c] > 0 && (minChar < 0 || c < s[minChar])) {
//                 minChar = i;
//             }

//             shuf[c] -= 1;
//             if (shuf[c] < ref[c]) {
//                 break;
//             }
//             i += 1
//         }
//         for (let j = minChar + 1; j < i + 1; j++) {
//             shuf[s[j]] += 1
//         }
//         ref[s[minChar]] -= 1
//         finalStr.push(s[minChar]);
//         i = minChar + 1

//     }
//     console.log(finalStr.join(''));
//     return finalStr.join('');

// }
// function shuffle(string) {
//     var str = string.split('');
//     for (var i = str.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * i);
//         var temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;

//     }
//     console.log(str);

//     return str.join('');
// }

// var s = "abcdefgabcdefg";
// reverseShuffleMerge(s)
// shuffle(string);


// function reverseShuffleMerge(s) {
//     let map={};
//     s = s.split('').reverse('').join('')
//     for(let item of s.split('')){
//         map[item]=map[item]?map[item]+1:1;
//     }
//     let ref={}
//     for(let key in map){
//         ref[key] = map[key]/2
//     }
//     let solution = [],i=0;
//     while (solution.length<s.length/2){
//         let min_char_pos = -1
//         while(true){
//             let c=s[i];
//             if(ref[c]>0&&(min_char_pos<0||c<s[min_char_pos])){
//                 min_char_pos = i;
//             }
//             map[c] -= 1;
//             if(map[c] < ref[c]){
//                 break
//             }
//             i+=1
//         }
//         for(let j=min_char_pos+1;j<i+1;j++){
//             map[s[j]]+=1
//         }
//         ref[s[min_char_pos]]-=1
//         solution.push(s[min_char_pos]);
//         i= min_char_pos+1
//     }
//     return solution.join('');
// }



// function reverseShuffleMerge(s) {
//     const count = s.split('').reduce((a,c) => {
//         a[c] = (a[c] || 0) + 1; return a;
//     }, {});

//     const reversed = {}
//     const shuffled = {}

//     for (const k of Object.keys(count)) {
//         reversed[k] = count[k]/2;
//         shuffled[k] = count[k]/2;
//     }

//     console.debug("reversed: %o", reversed);
//     console.debug("shuffled: %o", shuffled);

//     const finalString = [];

//     for (let i = s.length-1; i >= 0; --i) {
//         console.debug("looking at: " + s[i]);
//         const char = s[i];

//         // if we still need at least one of this character
//         if (reversed[char] > 0) {
//             console.debug("  could use this...");
//             // while the character is not in ideal order
//             // and the current char could go into the shuffled array
//             while (peek(finalString) && peek(finalString) > char && shuffled[peek(finalString)] > 0) {
//                 console.debug("    not in the best order...");
//                 const lastChar = finalString.pop();
//                 ++reversed[lastChar];
//                 --shuffled[lastChar];
//                 console.debug("      reversed: %o", reversed);
//                 console.debug("      shuffled: %o", shuffled);
//             }

//             finalString.push(char);
//             --reversed[char];
//             console.debug("    reversed: %o", reversed);
//             console.debug("    finalString: " + finalString);
//         } else {
//             --shuffled[char];
//         }

//     }

//     return finalString.join("");


// function whatFlavors(cost, money) {
//     // Write your code here
//     let flavors = [];
//     for (var i = 0; i < cost.length; i++) {
//         for (var j = i + 1; j < cost.length; j++) {
//             if (cost[i] + cost[j] == money) {
//                 console.log(i + 1, j + 1);
//                 return;

//             }
//         }
//     }

// }

// var cost = [1, 2, 4, 3];
// var money = 4;
// whatFlavors(cost, money)


// function encryption(s) {
//     // Write your code here
//     const L = s.length;
//     let string = '';
//     const col = Math.ceil(Math.sqrt(L));
//     for (var i = 0; i < col; i++) {
//         for (var j = i; j < L; j = j + col) {
//             string = string + (s[j] ? s[j] : '');
//         }
//         string = string + ' ';
//     }
//     return string;
//     // var result = ''
//     // const sLength = s.length
//     // const col = Math.ceil(Math.sqrt(sLength))

//     // for (var i = 0; i < col; i++) {
//     //     for (var j = i; j < sLength; j = j + col) {
//     //         result = result + (s[j] ? s[j] : '')
//     //     }
//     //     result = result + ' '
//     // }
//     // return result;
// }

// var s = "haveaniceday";
// console.log(encryption(s));

// function kaprekarNumbers(p, q) {
//     // Write your code here
//    var result =[];
//    for(var i=p;i<=q;i++){
//     let nSqure = [];
//     nSqure.push(Math.pow(i,2))
//     let divedNum = Math.floor((nSqure.join(',').length/2));
//     let left = nSqure.join(',').slice(0,divedNum);
//     let right = nSqure.join(',').slice(divedNum);
//     if(left -+- right == Math.sqrt(nSqure)) result.push(i);
//    }
//    let check = result.join(' ');
// console.log(check);
//    if(check.length === 0) console.log("INVALID RANGE")
//     else console.log(check); 

// }

// var p =1,q=100;
// kaprekarNumbers(p,q);

// let ans = [];
//     for(let i=p; i<=q; i++){
//         let count = [];
//         count.push(Math.pow(i, 2))
//         let num = Math.floor((count.join(',').length)/2)
//         let add1 = (count.join(',').slice(0,num))
//         let add2 = (count.join(',').slice(num))
//         if(add1 -+- add2 == Math.sqrt(count)) ans.push(i)
//     }
//     let check = ans.join(' ')
//     if(check.length === 0) console.log("INVALID RANGE")
//     else console.log(check)


// function beautifulTriplets(d, arr) {
//     // Write your code here
//     let count = 0;
//     arr.forEach(ele => {
//         if (arr.includes(ele + d)) {

//             if (arr.includes(ele + 2 * d)) {

//                 count++;
//             }
//         }

//     });
//     console.log(count);
//     return count;
// }
// var d = 3;
// var arr = [1, 2, 4, 5, 7, 8, 10];

// beautifulTriplets(d, arr);

// function beautifulTriplets(d, arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length - 2; i++) {
//       if (arr.includes(arr[i] + d)) {
//         if (arr.includes(arr[i] + 2 * d)) {
//           count++;
//         }
//       } 
//     }
//     return count;
// }


// console.log('travel');

// //*
// function travel(inArray, frameSize, operation) {
//     if (inArray.length < frameSize) {
//         operation(inArray);
//     } else {
//         for (let i = 0; i <= (inArray.length - frameSize); i++) {
//             operation(inArray.slice(i, i + frameSize));
//         }
//     }
// }

// //happy paths
// travel([1, 2, 3, 4, 3, 1, 4, 5, 9, 10], 1, (frame) => console.log(frame.join(',')));
// 1
// 2
// 3
// 4
// 3
// 1
// 4
// 5
// 9
// 10

// travel([1, 2, 3, 4, 3, 1, 4, 5, 9, 10], 3, (frame) => console.log(frame.join(',')));
// 1, 2, 3
// 2, 3, 4
// 3, 4, 3
// 4, 3, 1
// 3, 1, 4
// 1, 4, 5
// 4, 5, 9
// 5, 9, 10

// travel([1, 2, 1, 4, 5, 20, 21], 5, (frame) => console.log(frame.join(',')));
// 1, 2, 1, 4, 5
// 2, 1, 4, 5, 20
// 1, 4, 5, 20, 21

// travel([1, 2, 3, 5], 3, ([a, b, c]) => console.log(a + b + c));
// 6
// 10

// //edge case
// travel([1, 2, 1], 5, (frame) => console.log(frame.join(',')));
// 1, 2, 1



// advanced traversal



const range = (a, b) => Array(b - a).fill().map((e, i) => i + a);

function matrixTraversal(matrix, matrixSize = 4, frameSize = 3, operation) {

    range(0, matrixSize)
        .map(x => x * matrixSize)
        .map(rowNo => range(rowNo, matrixSize + rowNo))
        .forEach((row) => {
            range(0, matrixSize - frameSize + 1)
                .map(colid => row.slice(colid, colid + frameSize)
                    .map((i) => matrix[i]))
                .forEach((frame) => operation(frame));
        });

    range(0, matrixSize - frameSize + 1)
        .map(rowNo => range(rowNo * matrixSize, rowNo * matrixSize + matrixSize))
        .forEach((row) => {
            row.forEach((ele) => {
                const frame = range(0, frameSize)
                    .map((j) => ele + j * matrixSize)
                    .map((i) => matrix[i]);
                operation(frame);
            })
        });



    range(0, matrixSize - (frameSize - 1))
        .map(rowNo => range(rowNo * matrixSize, rowNo * matrixSize + matrixSize))
        .map((colid) => colid.slice(0, matrixSize - (frameSize - 1)))
        .map(dRow => {
            dRow.map((frameFirstCell) => range(0, frameSize)
                    .map((indexInFrame) => (frameFirstCell + indexInFrame * (matrixSize + 1)))
                    .map(index => matrix[index]))
                .forEach(operation)
        })


    range(0, matrixSize - (frameSize - 1))
        .map(rowNo => range(rowNo * matrixSize, rowNo * matrixSize + matrixSize))
        .map((colid) => colid.slice((frameSize - 1), matrixSize))
        .map(dRow => {
            dRow.map((frameFirstCell) => range(0, frameSize)
                    .map((indexInFrame) => (frameFirstCell + indexInFrame * (matrixSize - 1)))
                    .map(index => matrix[index]))
                .forEach(operation)
        })



}




var matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // var matrix =[0,1,2,3,4,5,6,7,8,9];
matrixTraversal(matrix, 3, 2, (frame) => console.log(frame, frame.reduce((acc, cur) => acc + cur)));



        // function timeInWords(h, m) {
        //     // Write your code here

        // }

        // var h =3,m=15;









        // for (var rowNo = 0; rowNo <= (matrixSize - frameSize); rowNo++) {
        //     let row = range(rowNo * matrixSize, rowNo * matrixSize + matrixSize);
        //     row.forEach((ele) => {
        //         let frame = range(0, frameSize).map((j) => ele + j * matrixSize);
        //         operation(frame.map((i) => matrix[i]));
        //     })
        // }

        // for (let j = 0; j < matrix.length; j += matrixSize) {
        //     let row = range(j, matrixSize + j);
        //     for (var colid = 0; colid <= (matrixSize - frameSize); colid++) {
        //         let frame = row.slice(colid, colid + frameSize);
        //         operation(frame.map((i) => matrix[i]));
        //     }
        // }




const range = (start, end) => Array.from(new Array(end - start), (x, i) => i + start);
const groupsOf = (xs, n) => range(0, xs.length - n + 1).map(i =>  xs.slice(i, i + n));
const product = xs => xs.reduce((acc, x) => acc * x, 1);
const maximum = xs => Math.max(...xs);

const euler8 = () => {
  const unparsedDigits = `
    73167176531330624919225119674426574742355349194934
    96983520312774506326239578318016984801869478851843
    ...
  `;
  const groupSize = 13;

  const digits = unparsedDigits.replace(/[^\d]/g, "").split("").map(c => parseInt(c));
  return maximum(groupsOf(digits, groupSize).map(product));
}
