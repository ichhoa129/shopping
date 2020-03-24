const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route')
const app = express();

const port = 8000;

//set view
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//render index page
app.get('/',(req,res) => res.render('index'));
app.use('/users',userRoutes);


app.listen(port,()=> console.log('Listening on port 8000'));