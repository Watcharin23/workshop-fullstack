const express = require('express');
const app = express(); 

const userController = require('./Controllers/UserController');

app.use('/user', userController); 

app.listen(3001);