require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser= require('cookie-parser');
const csurf = require('csurf')

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const productRoutes = require('./routes/product.route');
const cartRoutes = require('./routes/cart.route');
const regRoutes = require('./routes/register.route');
const transferRoutes = require('./routes/transfer.route');


const authMiddleware = require("./middlewares/auth.middleware");
const sessionMiddleware = require("./middlewares/session.middleware");




const app = express();


const port = 8000;

//set view
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
app.use(csurf({ cookie: true }));

//render index page
app.get('/',(req,res) => res.render('index'));
app.use('/users',authMiddleware.requireAuth,userRoutes);
app.use('/auth',authRoutes);
app.use('/',regRoutes);
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);
app.use('/transfer',authMiddleware.requireAuth,transferRoutes);

app.use(express.static('public'));

app.listen(port,()=> console.log('Listening on port 8000'));