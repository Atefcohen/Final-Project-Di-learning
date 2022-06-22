const knex = require ("knex")
const dotenv = require("dotenv")

dotenv.config();

const db = knex({
  client:'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  }
});


const getAllUsers =()=>{
  return db('users')
  .select('id','name','email','password')
}
module.exports = {getAllUsers};