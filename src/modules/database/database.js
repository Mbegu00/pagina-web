const mysql = require('mysql')


const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca',
    port: 3306
});

conexion.connect((err) => {
    if(err){
        throw err;
    } else() => console.log('conexion eXitosa a DB')
})

const readSql = 'SELECT * FROM libro;';

conexion.query(readSql, function (err, results) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
        }
        results.forEach(result => {
            console.log(result);
        });
    });

    
const addData = (nombre, apellido)=> {
    const addSql = "INSERT INTO libro (id, autor, n_libro)VALUES (NULL, '"+nombre+"','"+apellido+"')"
    conexion.query(addSql, function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
        }
    });
}



const readData = () => {
    conexion.query(readSql, function (err, results) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
        }
        results.forEach(result => {
            console.log(result);
        });
    });
}


module.exports = {
    readData,
    addData
};