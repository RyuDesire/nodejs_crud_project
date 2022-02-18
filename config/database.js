const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'node_crud'
});

connection.connect((error)=>{
  if(error){
    throw (error);
  }else{
    console.log('Conexión a la base de datos exitosa');
  }
});

module.exports = connection;