const express = require("express");

const app = express();

app.use(express.static("public"))

let puerto=3003

app.get("/home",(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/registro",(req,res)=>{
    res.sendFile(__dirname + "/views/registro.html")
})

app.get("/ingresar",(req,res)=>{
    res.sendFile(__dirname + "/views/ingresar.html")
})


app.listen(process.env.PORT || puerto,()=>{
    console.log ("Servidor corriendo en el puerto",puerto)
})

