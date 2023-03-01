export default () => ({
  aplicationPort: process.env.PORT_APLICATION,
  dataBase: {
    host: process.env.DATA_BASE_HOST,
    dbName: process.env.DATA_BASE,
    user: process.env.DATA_BASE_USER,
    password: process.env.DATA_BASE_PASSWORD,
    port: process.env.PORT
  }
})