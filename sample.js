// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function solveMeFirst(a, b) {
//   // Hint: Type return a+b below
//   return a+b;   
// }


// function main() {
//     var a = parseInt(readLine());
//     var b = parseInt(readLine());;

//     var res = solveMeFirst(a, b);
//     console.log(res);
// }

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// function ask(question) {
//     rl.question(question, (answer) => {
//         if (answer === "q") {
//             process.exit(1)
//         }
//         rl.write(`The answer received:  ${answer}\n`)

//         ask(question)
//     })
// }

// ask("What is your name: ")
// const fs = require("readl
// process.stdin.on('data', data => {
//   console.log(`You typed ${data.toString()}`);
//   process.exit();
// });
// process.stdin.on('readable',() => {
//     let chunk;
//     while((chunk = process.stdin.read()) !== null ){
//         process.stdout.write(`data:${chunk}`);
//     }
// })
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
// Indices [row, column]
// if n=4, where n is number array length, i must be 3 or less
// diagnolA [0,0], [1,1], [2,2], [3,3], - [i,i] where i is iterated arr.length from 0
// diagnolB [3,0], [2,1], [1,2], [0,3] - [arr.length-i, i] ""
function diagonalDifference(arr) {
  function absDiff(a, b) {
    return Math.abs(a - b);
  }
  function arraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  let diagnolA = [];
  let diagnolB = [];
  for (let i = 0; i < arr.length; i++) {
    diagnolA.push(arr[i][i]);
    diagnolB.push(arr[arr.length - 1 - i][i]);
  }
  return absDiff(arraySum(diagnolA), arraySum(diagnolB));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}