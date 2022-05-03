const express = require('express');
const router = express.Router();

//importacion de db y routers
const controllers = require('../modules/controllers/customen.controllers')

router.get('/', (req, res)=>{
    res.render("formulario")
});

router.post('/',(req, res) => {
    controllers.login(req, res)  
});

module.exports = router;