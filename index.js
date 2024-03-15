require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

// like math, express also has a lot of functionalities
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// to write an application we use get
app.get('/twitter', (req, res) =>{
    res.send('ishadotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>please study</h1>')
})
 
// if you edit a code in between then you have to restart the program (nodemon is used for this)

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

// if you are going on someone else's server it is not necessary that a particular port eg.3000 might be free
// we will use dot env 
// we can hide some files using this