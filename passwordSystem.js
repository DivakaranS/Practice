const events = [
    ['setPassword', '000A'],
    [
        'authorize', 108738450
    ],
    ['authorize', 108738449],
    ['authorize', 244736787]
];

function authEvents(events) {
    // Write your code here
    let hash = 0;
    let lastChar = 0;
    let authValues = '';

    function hashValues(values) {
        lastChar = values.charCodeAt(values.length - 1);
        hash = 0;
        let n = values.length;
        for (var i = 0; i < values.length; i++) {
            if (n != 0) {
                hash += values.charCodeAt(i) * Math.pow(131, --n);
            } else {
                hash += values.charCodeAt(i)
            }

        }
        hash = hash % (Math.pow(10, 9) + 7)
    }
    events.forEach(([events, values]) => {
        if (events == 'setPassword') {
            authValues = values;
            hashValues(values);
        }
        if (events == 'authorize') {
            if (hash == values) {
                authValues += String.fromCharCode(lastChar + 1);
                hashValues(authValues);
                console.log(1);

            } else {
                console.log(0);
            }
        }
    })
}

console.log(authEvents(events));