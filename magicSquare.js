/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

const formingMagicSquare = (s) => {
    // Write your code here
    // var magicSqure = [];
    let cost = 0;
    const possible = [[8, 1, 6], [3, 5, 7], [4, 9, 2]]
    s.forEach(([a, b, c]) => {
            if (a + b + c <= 15) {
                cost += 15 - (a + b + c)
            } else {
                cost -= 15 - (a + b + c)

            }
        })
    return cost;
}
console.log(formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2]
]));

// console.log(formingMagicSquare([
//     [4, 9, 2],
//     [3, 5, 7],
//     [8, 1, 5]
// ]));

// console.log(formingMagicSquare([
//     [4, 8, 2],
//     [4, 5, 7],
//     [6, 1, 6]
// ]));


// console.log(formingMagicSquare([
//     [4, 5, 8],
//     [2, 4, 1],
//     [1, 9, 7]
// ]));

// console.log(formingMagicSquare([
//     [9, 8, 2],
//     [4, 9, 7],
//     [6, 1, 6]
// ]));

// function formingMagicSquare(s) {
//     // Write your code here
//     const possibleCases = [
//         [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
//         [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
//         [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
//         [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
//         [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
//         [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
//         [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
//         [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
//     ]
    
//     let min = 45
//     possibleCases.forEach((square) => {
//         let sum = 0
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 sum += Math.abs(s[i][j] - square[i][j])
//             }
//         }
//         if (sum < min) min = sum
//     })
//     return min
// }


// console.log(formingMagicSquare([
//     [9, 8, 2],
//     [4, 9, 7],
//     [6, 1, 6]
// ]));
