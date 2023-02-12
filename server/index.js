const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'});

const smartphoneRouter=require('./routes/route');

require('./database/db').connect();

const PORT= process.env.PORT || 4000;

const app=express();

app.use(express.json());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/',smartphoneRouter);

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
    
})