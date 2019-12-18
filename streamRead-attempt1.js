var fs = require("fs");
var stream;
const path = '/Users/santanu/Downloads/dcbms-dev-subscriptionStatusNotification-v3_output.json'

stream = fs.createReadStream(path);

stream.on("data", function(data) {
    var chunk = data.toString();
    console.log(chunk);
    //console.log(JSON.parse(chunk));
}); 
