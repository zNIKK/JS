require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routers/usersRouter');
const adminRouter = require('./routers/adminRouter');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL, (err) => {
    if(err)
        console.log(err);
     else 
        console.log("Mongo connected");
})
app.use('/user',express.json(), userRouter);
app.use('/admin', express.json(), adminRouter)


app.listen(process.env.PORT, () => {
    console.log(`Server Running`);
})