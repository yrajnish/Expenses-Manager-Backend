const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config/config');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());


const userRouter = require('./modules/user/router');
const accountRouter = require('./modules/account/router');
const categoryRouter = require('./modules/category/router');
const addressRouter = require('./modules/address/router');
const authenticationRouter = require('./modules/authentication/router');
const transactionRouter = require('./modules/transaction/router');
const userdetailsRouter = require('./modules/userDetail/router');


app.use('/user', userRouter);
app.use('/account', accountRouter);
app.use('/category', categoryRouter);
app.use('/address', addressRouter);
app.use('/authentication',authenticationRouter);
app.use('/trasaction',transactionRouter);
app.use('/userdetails',userdetailsRouter);
// routers 

app.listen(config.PORT, (req, res)=>{
    console.log('Server is running on port 8000');
    mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true },).then((_) => {
        console.log('Connected to DB');
    }).catch(err => {
        console.log(err);
    });
})
