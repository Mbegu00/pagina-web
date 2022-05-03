const express = require('express');
const app = express();
const mysqli = require('mysql')

//LE PASAMOS LOS DATOS Y CREAMOS 
const conexion = mysqli.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca',

});

//HACEMOS LA CONEXION A  LA BASE DE DATOS
conexion.connect(function(error){
    if(error){
        console.log('HUBO UN ERROR' + error);
    }else { console.log('Conxeion exitosa')}
})

//MOSTRAR DATOS
conexion.query('SELECT * FROM libro', function(err, results, fields){
    if(err) throw err;
    else{ 
        results.forEach(result => {
            console.log('Mi base de datos',result);
        });
        
    };
});

//INSERTAR DATOS
conexion.query('INSERT INTO libro (autor, n_libro) VALUES ("Camila", "libro de viajes")', function(err, result, fields){
    if(err) throw err;
    console.log('Funciona mi base de datos', result)
})


// app.get('/', (req, res) => {
//     res.send('Welcome')
// })


// app.listen(process.env.PORT, ()=> console.log('listening on port'))