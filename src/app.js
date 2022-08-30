import express from 'express';
import morgan from 'morgan';
//Routes
import languageRoutes from './routes/language.routes.js'

//Aqui ejecuto el framework Express
const app = express();

//Settings
app.set('port', 4000);

//Middleware (Funciones intermedias entre peticion y respuesta)

app.use(morgan('dev')); //El modulo morgan en modo de desarrollo me da un detalle en consola de las peticiones que estoy haciendo(verbo, rutas, etc)
app.use(express.json()); //Permite entender y procesar JSON
//Routes
app.use('/api/languages', languageRoutes);//En esa ruta va a traer la respuesta que esta en languageRoutes

export default app;