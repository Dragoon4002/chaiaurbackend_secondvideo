require('dotenv').config()
const express = require('express') //imports express
const app = express() //loads it in app constant
const port = 4000 //it is just a normal port no., can be any number

app.get('/', (req, res) => {//app sends a get command to the root ('/') and checks for request (req) and its response (res)
  res.send('Hello World!')
})

app.get('/facebook',(req,res)=>{//app sends a get command to the twitter route ('/twitter') and checks for request (req) and its response (res)
    res.send('SounakDey')
})

app.get("/login", (req,res)=>{
    res.send("<h1>Login You deepshit</h1>")
})

app.get("/pornhub",(req,res)=>{
    res.send("<h1>Parle salle</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})