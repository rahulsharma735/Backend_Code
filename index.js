require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Rahul-Sharma')
})

app.get('/login',(req, res)=>{
    res.send('<h1>please login at cahi or code</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h1>Chai or code </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})