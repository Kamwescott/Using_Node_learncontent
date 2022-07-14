'use strict';

const http = require('http');
const port = process.env.PORT||8000; //process.env = object that can read from all of the enviorment variables in our shell. 

const server = http.createServer((req, res) =>{
   if (req.method === 'GET' && req.url === '/guests'){
       const guests  = ['mary', 'Don'];
       const guestsJSON = JSON.stringify(guests);
       
       res.setHeader('Content-Type', "application/json");
       res.end(guestsJSON);
   
    } else {
        res.statusCode = '404';
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found')
   }

});

server.listen(port, () =>{ // telling server to listen for incoming http requests on port; 
    console.log('listening on port', port); 
})