var fs = require("fs");
const { Transform } = require('stream');
const { Writable } = require('stream');
var es = require('event-stream')
var stream;
const path = '/Users/santanu/Downloads/dcbms-dev-subscriptionStatusNotification-v3_output.json'

stream = fs.createReadStream(path);

const outStream = new Writable({
        write(chunk, encoding, callback) {
            console.log(JSON.parse(chunk));
            callback();
        }
    });

const arrayToObject = new Transform({
    readableObjectMode: true,

    transform(chunk, encoding, callback) {
        this.push(JSON.parse(chunk));
        callback();
    }
});
const objectToString = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
      this.push(JSON.stringify(chunk) + '\n');
      callback();
    }
  });
//readableObjectMode and writableObjectMode should interpretate as reversly. if readableObjectMode is true you can write object, vice versa.
stream.pipe(es.split()).pipe(arrayToObject).pipe(objectToString).pipe(outStream);