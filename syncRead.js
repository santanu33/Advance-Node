const fs = require('fs');
const path = '/Users/santanu/Downloads/dcbms-dev-subscriptionStatusNotification-v3_output.json'
fs.readFileSync(path, 'utf8').split("\n").forEach(element => {
    if (element.length > 0) {
        let parsed_element = JSON.parse(element);
        console.log(parsed_element);
    }
});