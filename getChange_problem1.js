const paiseCoins = [0.01, 0.05, 0.10, 0.25, 0.50, 1.00];

const getChange = (x, y) => {
    let change = parseFloat((x - y).toFixed(2));
    return pasiseCoins.reverse().map((paise) => {
        if (change > paise) {
            change = parseFloat((change - paise).toFixed(2));
            return 1;
        } else {
            return 0;
        }

    })

}

console.log(getChange(5,0.99));