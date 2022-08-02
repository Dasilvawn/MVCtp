const express= require('express') ;
const app = express();

const port = 3000;
const mainRouter = require('/routers/mian');

// recursos estaticos
app.use(express.static('public'));

// rutas
app.use('/',mainRouter);


app.listen(port, () =>{ console.log('server running in http://localhost:' + port)
 });

