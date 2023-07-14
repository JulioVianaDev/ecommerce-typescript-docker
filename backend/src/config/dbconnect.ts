const mongoose = require('mongoose');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;


exports.connect = () => {
  mongoose
    .connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@mongo:${DB_PORT}/${DB_NAME}?authSource=admin&directConnection=true`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(console.log('DB CONNECTION SUCCESSFULL'))
    .catch((err:any) => {
      console.error('FAILED TO CONNECT TO DB');
      console.error(err);
    });
};