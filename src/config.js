import {config} from 'dotenv'; //Importo config del paquete dotenv, que permite interactuar con las variables de entorno

config(); //Pone esas variables a disposicion para usar.

export default {
  host: process.env.HOST || '',
  database: process.env.DATABASE|| '',
  user: process.env.USER || '',
  password: process.env.PASSWORD || '' 
}