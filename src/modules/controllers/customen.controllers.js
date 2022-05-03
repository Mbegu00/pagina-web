const database = require('../database/database')

const login = (req, res) => {
    let {nombre, apellido} = req.body;
    console.log(nombre, apellido);
    database.addData(nombre, apellido)
    res.redirect('/')
}

module.exports = {
    login
};