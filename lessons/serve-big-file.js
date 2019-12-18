const fs = require('fs');
const server = require('http').createServer()
const path = '/Users/santanu/Downloads/dcbms-dev-subscriptionStatusNotification-v3_output.json'

server.on('request' , (req, res) => {
    // fs.readFile(path, (err, data) =>{
    //     res.end(data);
    // })
    fs.createReadStream(path).pipe(res);
});

server.listen(8000);