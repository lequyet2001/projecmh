require('dotenv').config();
module.exports = {
  user: 'lequyet', // better stored in an app setting such as process.env.DB_USER
  password: 'Quyet110213', // better stored in an app setting such as process.env.DB_PASSWORD
  server: 'lequyet.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: 'damh', // better stored in an app setting such as process.env.DB_NAME

  options: {
      encrypt: true,
      trustServerCertificate: true // change to true for local dev / self-signed certs
  }
  };
  