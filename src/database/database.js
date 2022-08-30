import mysql from 'promise-mysql'; //Conectarme a base de datos
import config from './../config'; //Configuracion


const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password
})

const getConnection =()=>{
  return connection;
}

module.exports = {
  getConnection
}