const app = require('express')();
const bodyParser = require('body-parser');
const db = require('./config/db');
const consign = require('consign');

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app);

app.db = db;

app.listen(3000, () => {
    console.log('bkend executando');
})

app.get('/', (req, res) => {
    console.log('Func 1');
    res.status(200).send('Meu bkend');
})

