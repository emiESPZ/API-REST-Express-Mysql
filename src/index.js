import app from './app';

const main = ()=>{
  app.listen(app.get('port')); //Este es el port 4000 que viene de app.js
  console.log(`Server listening on port ${app.get('port')}`)

};

//Esta sera la ejecucion del servidor
main();