require('dotenv').config({
  path:'.env'
})


module.exports = {
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'victor',
  password:process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'nodewithsequelize', 
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
  

}