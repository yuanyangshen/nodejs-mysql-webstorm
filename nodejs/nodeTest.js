var mysql = require('mysql');
var dbConnInfo = {
"host"           : '127.0.0.1',
"database"     	 : 'test',
"port"           : 3306,
"user"           : 'root',
"password"       : ''
}
var connect = mysql.createConnection(dbConnInfo);
connect.connect();
console.log("mysql has connnected");
connect.end();
console.log("mysql has colsed");

/*{
    host:'localhost',
    user:'root',
    password:'',
    database:'test',
    port:3306
}*/
