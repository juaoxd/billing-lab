export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  database: {
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB,
    user: process.env.DB_USER,
    port: process.env.DB_PORT
  }
})