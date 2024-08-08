const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json())
server.listen(4000, () =>{
    console.log('Account server starting on port 4000!!!! ')
})
const Account = [
    {
        username:'admin',
        password:'admin'
    }
]

server.get('/account',(req,res)=>{
    res.json(Account)
})
server.post('/register',(req,res)=>{
    const newAcc = {
        username: req.body.username,
        password: req.body.password
    }
    Account.push(newAcc)
    res.json(Account)
})