const mysql = require('mysql')

require("dotenv").config(); 

//console.log(process.env.MYSQL_PASSWORD);

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '34.70.5.64',
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'admin'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;