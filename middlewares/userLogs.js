const fs = require('fs')
const path = require('path')


function logUserMiddleware(req, res, next){
    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt') , 'El usuario ingresó en la ruta: ' + req.url + '\n');
    next();

};

module.exports = logUserMiddleware; 