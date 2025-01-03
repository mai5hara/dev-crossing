require('dotenv').config()

const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');
const db = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(db,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch(err) {
    console.error(err.message);
    //Exit orocess with failure
    process.exit(1);
  }
}

module.exports = connectDB;