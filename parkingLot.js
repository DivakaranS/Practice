'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (chunk) {
//     inputString += chunk;
// });
// process.stdin.on("end", function () {
//     inputString = inputString.split('\n');
//     main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }


class ParkingLot {
    // Add the methods here
    constructor(slots){
        this.slotsArray = Array(slots).fill('');
        this.index =0;
    }
    getSlots (){   
        return this.slotsArray.sort(function(a,b) { 
            return (a==='')-(b==='') || +(a>b) || -(a<b);
        });
    }
    park(carId){
           if(!this.slotsArray.includes(carId) && this.index < this.slotsArray.length){
            this.slotsArray[this.index] = carId;
            this.index++;
            return true;
           }else{
            return false;
           }
    }
    remove(carId){
        if(this.slotsArray.indexOf(carId)>-1){
            this.slotsArray[this.slotsArray.indexOf(carId)]='';
            this.index--;
            return true;
        }
    }

}
let parking = new ParkingLot(5);
parking.park('CAR-10');
parking.park('CAR-20');
parking.park('CAR-30');
parking.remove('CAR-10');
console.log(parking.getSlots());



// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
//     const numberOfSlots = parseInt(readLine().trim());
//     const parkingLotObj = new ParkingLot(numberOfSlots);
//     ws.write(`Parking Lot created with number of slots as ${numberOfSlots}\n`);
    
//     let numberOfOperations = parseInt(readLine().trim());
//     while (numberOfOperations-- > 0) {
//         const inputs = readLine().trim().split(' ');
//         const operation = inputs[0];
//         const carId = inputs[1];

//         switch(operation) {
//             case 'Park':
//                 if (parkingLotObj.park(carId)) {
//                     ws.write(`Parking Started: ${carId}\n`);
//                 } else {
//                     ws.write(`Parking Full: ${carId}\n`);
//                 }
//                 break;
//             case 'Remove':
//                 if (parkingLotObj.remove(carId)) {
//                     ws.write(`Car id ${carId} removed from parking\n`);
//                 } else {
//                     ws.write(`Car: ${carId} not found\n`);
//                 }
//                 break;
//             case 'GetSlots':
//                 const status = parkingLotObj.getSlots();
//                 status.forEach((obj, i) => {
//                     if (obj) {
//                         ws.write(`Parked at slot ${i + 1}: ${obj}\n`);
//                     } else {
//                         ws.write(`Slot ${i + 1} is empty\n`);
//                     }
//                 })
//                 break;
//             default:
//                 break;
//         }
//     }
//     ws.end();
// }