// Problem: Ironman's legacy in trouble

// Design a data structure to help Avengers handle massive data from the cosmic receptors installed on the roof of the new Avengers building by Ironman before his untimely demise.

// These receptors can listen to an 'N' number of planets anytime. It starts with 'N' zeros and then adds the number received for the planet range. Blackwidow finally tallies and sees what planet range received the highest numbers and asks one of the avengers to visit that planet range to see if everything is ok. She then resets it to zeros, and the cosmic receptors will start adding the numbers.

// When Ironman installed these receptors, he didn't consider the number of planets they would monitor. With Captain Marvel joining the band of Avengers, the receptors cannot keep up with the naive algorithm written.
// Task:

// The naive method involves taking an array of numbers filled with zeros and adding the number received for the range of indexes. But with millions of planets sending numbers, this approach is not viable. You should design a data structure to handle this range of indexes better.
// Input:

// Write a function or method to take the number of planets and array of reception. Each reception is an array of three numbers from and to (excluded) range of planets and a number to add. This function will return the range of planets with the largest number and the number.
// Example:

// findTheRange(5, [[2, 4, 5], [1, 3, 6], [2, 4, 7]]) returns [2, 3, 18]

const range = (n) => Array(n).fill(0);

const findTheRange = (number, arrayOfReception) => {
    let initialArray = range(number);
    let max;
    //update initialArray using forEach;
    arrayOfReception.forEach(([start, end, value]) => {
        while (start < end) {
            initialArray[start] += value;
            start++;
        }
    });
    max = Math.max(...initialArray);
    //used indexof function get range of max value in initialArray.ex:initialArray.slice(start,end);
    return [initialArray.indexOf(max), initialArray.indexOf(max) + 1, max];
}

console.log(findTheRange(5, [
    [2, 4, 5],
    [1, 3, 6],
    [2, 4, 7]
]));



console.log(findTheRange(7, [
    [2, 4, 5],
    [1, 3, 6],
    [2, 4, 7],
    [3, 4, 5],
    [1, 3, 11],
    [2, 5, 22]
]));


console.log(findTheRange(10, [
    [5, 6, 12],
    [4, 7, 22],
    [2, 4, 7],
    [3, 4, 5],
    [1, 3, 14],
    [2, 5, 9]
]));