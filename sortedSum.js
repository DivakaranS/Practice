function sortedSum(a) {
    // Write your code here
    let sum=0;
    for(var i=1;i<=a.length;i++){
        let s = a.slice(0,i).sort((a,b)=>a-b)   ;
        for(var j=0;j<s.length;j++){
          sum += ((j+1) * s[j]);
        }
    }
    return sum%(Math.pow(10,9)+7);

}
// console.log(sortedSum([4,3,2,1]));
// console.log(sortedSum([9,5,8]));
// console.log(sortedSum([5,9]))
console.log(sortedSum([747402,380408,605449,846906,385224,31431,677517,770001,389085,40373,487560,886252,596334,59083]));


// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const aCount = parseInt(readLine().trim(), 10);

//     let a = [];

//     for (let i = 0; i < aCount; i++) {
//         const aItem = parseInt(readLine().trim(), 10);
//         a.push(aItem);
//     }

//     const result = sortedSum(a);

//     ws.write(result + '\n');

//     ws.end();
// }
