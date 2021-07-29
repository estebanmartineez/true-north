const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const db = require('./configs/database');
const userRoutes = require('./routes/user.route');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// Connect to database
db.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(e => console.log(e))

//Routes
app.use('/api/user', userRoutes);

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);


