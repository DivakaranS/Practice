'use strict';

function Activity(amount) {
    this.amount = amount;
    const setAmount = (value) => {
        if (value <= 0) {
            return false;
        } else {
            this.amount = value;
            return true;
        }
    }
    const getAmount = () => {
        return this.amount;
    }
    return {
        setAmount,
        getAmount
    }

}

function Payment(amount, receiver) {
    const payment = new Activity(amount);
    let setAmount = payment.setAmount;
    let getAmount = payment.getAmount;
    this.receiver = receiver;
    const setReceiver = (receiver) => {
        this.receiver = receiver;
    }
    const getReceiver = () => {
        return this.receiver
    }
    return {
        setAmount,
        getAmount,
        setReceiver,
        getReceiver
    };
}
Payment.prototype.setAmount = function(updatedAmount) {
    this.amount = updatedAmount;
}
Payment.prototype.getAmount = function() {
    return this.amount;
}
Payment.prototype.setReceiver = function(updatedReceiver) {
    this.receiver = updatedReceiver;
}
Payment.prototype.getReceiver = function() {
    return this.receiver;
}

function Refund(amount, sender) {
    const refund = new Activity(amount);
    let setAmount = refund.setAmount;
    let getAmount = refund.getAmount;
    this.sender = sender;
    const setSender = (sender) => {
        this.sender = sender;
    }
    const getSender = () => {
        return this.sender
    }
    return {
        setAmount,
        getAmount,
        setSender,
        getSender
    };


}
Refund.prototype.setAmount = function(updatedAmount) {
    this.amount = updatedAmount;
}
Refund.prototype.getAmount = function() {
    return this.amount;
}
Refund.prototype.setSender = function(updatedSender) {
    this.sender = updatedSender;
}
Refund.prototype.getSender = function() {
    return this.sender;
}


const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(chunk) {
    inputString += chunk;
});
process.stdin.on("end", function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
     console.log(ws);
    const objectType = readLine().trim();

    const inputsForObjectCreation = readLine().trim().split(' ');
    const updatedAmount = parseInt(readLine().trim());
    const updatedSenderReceiver = readLine().trim();
    switch (objectType) {
        case 'Payment':
            const paymentObj = new Payment(parseInt(inputsForObjectCreation[0]), inputsForObjectCreation[1]);
            ws.write(`Payment object created with amount ${paymentObj.getAmount()} and receiver ${paymentObj.getReceiver()}\n`);
            if (paymentObj.setAmount(updatedAmount)) {
                ws.write(`Amount updated to ${updatedAmount}\n`);
            } else {
                ws.write(`Amount not updated\n`);
            }
            paymentObj.setReceiver(updatedSenderReceiver);
            ws.write(`Receiver updated to ${updatedSenderReceiver}\n`);
            ws.write(`Payment object details - amount is ${paymentObj.getAmount()} and receiver is ${paymentObj.getReceiver()}\n`);
            ws.write(`Payment.prototype has property setAmount: ${Payment.prototype.hasOwnProperty('setAmount')}\n`);
            ws.write(`Payment.prototype has property getAmount: ${Payment.prototype.hasOwnProperty('getAmount')}\n`);
            ws.write(`Payment.prototype has property setReceiver: ${Payment.prototype.hasOwnProperty('setReceiver')}\n`);
            ws.write(`Payment.prototype has property getReceiver: ${Payment.prototype.hasOwnProperty('getReceiver')}\n`);
            break;
        case 'Refund':
            const refundObj = new Refund(parseInt(inputsForObjectCreation[0]), inputsForObjectCreation[1]);
            ws.write(`Refund object created with amount ${refundObj.getAmount()} and sender ${refundObj.getSender()}\n`);
            if (refundObj.setAmount(updatedAmount)) {
                ws.write(`Amount updated to ${updatedAmount}\n`);
            } else {
                ws.write(`Amount not updated\n`);
            }
            refundObj.setSender(updatedSenderReceiver);
            ws.write(`Sender updated to ${updatedSenderReceiver}\n`);
            ws.write(`Refund object details - amount is ${refundObj.getAmount()} and sender is ${refundObj.getSender()}\n`);
            ws.write(`Refund.prototype has property setAmount: ${Refund.prototype.hasOwnProperty('setAmount')}\n`);
            ws.write(`Refund.prototype has property getAmount: ${Refund.prototype.hasOwnProperty('getAmount')}\n`);
            ws.write(`Refund.prototype has property setSender: ${Refund.prototype.hasOwnProperty('setSender')}\n`);
            ws.write(`Refund.prototype has property getSender: ${Refund.prototype.hasOwnProperty('getSender')}\n`);
            break;
        default:
            break;
    }
}