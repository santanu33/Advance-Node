const fs = require('fs');
const readline = require('readline');
const path = '/Users/santanu/Downloads/dcbms-dev-subscriptionStatusNotification-v3_output.json'


const readInterface = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    console.log(JSON.parse(line));
});