require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routers/usersRouter');
const adminRouter = require('./routers/adminRouter');
const mongoose = require('mongoose');


// outra forma de fazer tokens com express-session
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const sessionOptions = session({
    secret: 'mjzxcnxcqdwqeqwfqweqççw21321{};[=',
    store: MongoStore.create({ mongoUrl: process.env.MONGO_CONNECTION_URL, mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias vai durar esse cookie
        httpOnly: true,
    }
});

mongoose.connect(process.env.MONGO_CONNECTION_URL, (err) => {
    if (err)
        console.log(err);
    else
        console.log("Mongo connected");
});
app.use('/', sessionOptions, flash(), userRouter)
app.use('/user', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server Running`);
})