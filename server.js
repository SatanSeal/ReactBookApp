require('dotenv').config();
const express = require('express'),
      app = express(),
      cors = require('cors'),
      cookieParser = require('cookie-parser'),
      csrf = require('csurf'),
      helmet = require('helmet'),
      path = require('path'),
      books = require('./src/books'),
      secure = require('./src/secure'),
      user = require('./src/user');

let csrfProtection = csrf({ cookie: true });
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(csrfProtection);

app.use('/API__books', books); // adding books routes
app.use('/API__secure', secure); // adding secure routes
app.use('/API__user', user); // adding user routes

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
});

app.listen(3001, () => {
    console.log('server started');
});