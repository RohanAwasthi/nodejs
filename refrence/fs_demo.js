
const { log } = require('console');
const fs = require('fs');
const path = require('path')



fs.rename(path.join(__dirname, '/nkdebug', 'demo2222.text'),path.join(__dirname, '/nkdebug', 'data-nkdeb.text'), (err) =>  {

    if(err) throw err;
    console.log('file renamed');
});