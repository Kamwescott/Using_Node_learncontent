'use strict';

const http = require('http');
const port = process.env.PORT||8000; //process.env = object that can read from all of the enviorment variables in our shell. 

const server = http.createServer((req, res) =>{
    const guests  = ['mary', 'Don'];
    const guestsJSON = JSON.stringify(guests);

    res.setHeader('Content-Type', "text/plain");
    res.end(guestsJSON);
});

server.listen(port, () =>{ // telling server to listen for incoming http requests on port; 
    console.log('listening on port', port); 
})