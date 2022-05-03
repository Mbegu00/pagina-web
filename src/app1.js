const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

app.set('jwt', process.env.KEY)
app.use(express.json());
app.use(express.urlencoded({ extended:false}));



app.get('/', (req, res)=>{
    res.render("Hola mundo")
});




app.listen(3000, ()=>console.log('conexion exitosa del server'));


app.post('/login',(req, res) => {
    if(req.body.usuario == 'admin' && req.body.password == '12345'){
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get(process.env.KEY), {
            expiresIn: '7d'
        });
        res.json({ 
            message:'AUTENTICACION EXITOSA',
            token: token
        })
    }else{
        res.json({ message:'Usuario o contraseña son incorrectas'})

    }
});
