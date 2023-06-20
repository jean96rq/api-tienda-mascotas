const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes')

app.set('port', process.env.PORT || 9000);

const dboptions={
    host: '34.176.13.25',
    port: 3306,
    user: 'root',
    password: '[r>R#FBc-6^>,*Y+',
    database: 'DB_TIENDA_MASCOTAS',
    trustServerCertificate: true
}

//middelware--------------------------

app.use(myconn(mysql, dboptions, 'single'));
app.use(express.json())
//routes---------------------------------
app.get('/',(req,res)=>{
    res.send('Welcome to my api')
})

app.use('/', routes)

//server running
app.listen(app.get('port'), ()=>{
    console.log("server corriendo en el puerto: " + app.get('port'));
})