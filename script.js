const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static("views"))

const emailDB = 'niyad@gmail.com';
const passwordDB = 123;

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    console.log(email,password);
    if(email == emailDB && password == passwordDB) {
        res.send('Login successful')
    }else{
        res.send('Login failed')
    }
})

app.listen(port, ()=>{console.log(`runnign port: ${port}`);})