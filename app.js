const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')

//importacion de db y routers
const router = require('./src/router/customers')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(path.join(__dirname + './src/public')));


//ahora se usa esto debes de body parser
//es para obtener los datos de un post
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))

//routas
app.use('/', router)
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname + '/src/views/formulario.html'))
// })



app.listen(3000, ()=>console.log('conexion exitosa del server'));