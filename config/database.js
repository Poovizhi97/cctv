const mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit : 100,
    host : 'database-1.cjsg9chszlol.us-east-2.rds.amazonaws.com',
    port:'3306',    
    user :  'admin',
    password: 'coitor123',
    database: 'CCTV'
})