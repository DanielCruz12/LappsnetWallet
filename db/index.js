const {Client, Pool } = require('pg')
require('dotenv').config()

/* const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})
 */

const connectionData = {
  user: "my_user",
  host: "localhost",
  database: "database_wallet",
  password: "root",
  port: "5432"
}
const client = new Client(connectionData);

 ;(async () => {
  try {
    console.log('Initializing DB...')
    await pool.connect()
    await pool.query({
      text: `
        CREATE TABLE IF NOT EXISTS public."Users"(
          username VARCHAR(100) UNIQUE NOT NULL,
          credId VARCHAR(1000) UNIQUE NOT NULL,
          pubKeyBytes VARCHAR(256) NOT NULL,
          pubKeyPem VARCHAR(256) NOT NULL,
          counter INTEGER NOT NULL,
          PRIMARY KEY ("username")
        );
      `,
      values: []
    })
    console.log('User table created if not exists')
    await pool.query({
      text: `
      CREATE TABLE IF NOT EXISTS public."Challenges"(
        "username" VARCHAR(100) NOT NULL,
        "challenge" VARCHAR(100) NOT NULL,
        "expiration" VARCHAR(30) NOT NULL,
        PRIMARY KEY ("challenge")
      );`
    })
    console.log('Challenge table created if not exists')
  } catch (err) {
    console.error(err)
  }
})();

client.connect()
client.query('SELECT * FROM merchants')
.then(response => {
  console.log(response.rows)
  client.end()
})
.catch(err => {
  console.error(err)
}) 

module.exports = {
  query: (text, params) => pool.query(text, params)
}
