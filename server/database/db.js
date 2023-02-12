const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'});

const DB=process.env.DB_URL;

//everything that we do with mongo and mongoose is always a promise
exports.connect = () => {
    mongoose
      .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log(`DB CONNECTED SUCCESSFULLY`))
      .catch((error) => {
        console.log(`DB CONNECTION FAILED`);
        console.log(error);
        process.exit(1);
      });
  };