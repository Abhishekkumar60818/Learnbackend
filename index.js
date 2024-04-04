require('dotenv').config()
const express = require('express')
const app = express()
const port =4000;
app.get('/', function (req, res) {
    console.dir(res.headersSent) // false
    res.send('OK')
    console.dir(res.headersSent) // true
  })
app.get('/login',(req,res)=>{
    res.send("you  are login")
})
app.get('/signup',(req,res)=>{
    res.send("you  are signup page")
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listen on ${port}`)
})
