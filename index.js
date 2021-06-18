const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const { HOST, USERNAME, PASSWORD, DB, MONGO_PORT } = require('./configs/database');
const taskRoutes = require('./routes/task.route');

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//Connect to Database
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

console.log('MONGODB Connection',`mongodb://${USERNAME}:${PASSWORD}@${HOST}:${MONGO_PORT}/${DB}`);
mongoose.connect(`mongodb://${USERNAME}:${PASSWORD}@${HOST}:${MONGO_PORT}/${DB}`, options)
    .then(() => console.log('Database connection successfully'))
    .catch(e => console.log(e))

//Routes
app.use('/api/task', taskRoutes);

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);


