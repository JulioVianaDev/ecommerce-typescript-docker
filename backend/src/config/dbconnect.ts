const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;


exports.connect = () => {
  mongoose
    .connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@192.168.15.16:${DB_PORT}/${DB_NAME}?authSource=admin`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        directConnection: true,
        serverSelectionTimeoutMS: 500000000,
        socketTimeoutMS:0,
        family:4
      }
    )
    .then(console.log('DB CONNECTION SUCCESSFULL'))
    .catch((err:any) => {
      console.error('FAILED TO CONNECT TO DB');
      console.error(err);
    });
};