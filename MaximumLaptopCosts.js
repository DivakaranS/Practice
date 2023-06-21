var cost = [0,3,2,3,4]
var labels = ["legal","legal","illegal","legal","legal"];
var dailyCount = 1;

function maxCost(cost, labels, dailyCount) {
    // Write your code here
    var costIncurring = [];
    let count = 0;
    let cut = 0
    for (var i = 0; i < cost.length; i++) {
        if (labels[i] == 'legal') {
            count++;
        }
        if (count == dailyCount) {

            costIncurring.push(cost.slice(cut, i + 1).reduce((a, c) => a + c));
            cut = i + 1;
            count = 0;
        }
    }

    if(costIncurring.length !== 0){
    return Math.max(...costIncurring);
    }else {
        return 0;
    }
}


console.log(maxCost(cost, labels, dailyCount));

var number = [5,10,10]
var queries = [1,2,5]
function findSum(numbers, queries) {
    // Write your code here
   // var sum=[];
   
   //  sum = number.slice(queries[0]-1,queries[1]);
   //  if(sum.includes(0)){
   //      return sum.reduce((a,c)=>a+c)+queries[2];
   //  }else{
   //      return sum.reduce((a,c)=>a+c);
   //  }
   
var sum=[];
    sum = numbers.slice(queries[0]-1,queries[1]);
    if(sum.includes(0)){
        console.log(sum.reduce((a,c)=>a+c)+queries[2]);
    }else{
        console.log(sum.reduce((a,c)=>a+c));
    }

}
console.log(findSum(number,queries));

























