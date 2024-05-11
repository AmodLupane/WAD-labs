const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res)=>{
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/signup', (req, res)=>{
    res.sendFile('./signup.html', {root: __dirname})
})

app.get('/*', (req, res)=>{
    res.send(`404 Error: Page not found`)
})

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`)
})