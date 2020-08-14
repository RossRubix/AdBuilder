const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {Client} = require('pg')
const db = new Client({
  user: "postgres",
  password: "jamesg",
  host: "localhost",
  port: 5432,
  database: "localdb"
})
connect()

async function connect() {
  try {
    db.connect()
      .then( () => {
          console.log("Conencted successfully.")
          // db.query("INSERT INTO localtable (id,filename,description) values(2,'file','desc')", (err,res) =>{
          //   console.log('insert successfully')
          // })
          db.query("SELECT * FROM localtable", (err,res) => {
            console.log(err)
            console.log("select")
          })
      })
      .catch( (e) => console.log("Error connection. ", e))
      .finally( () => db.end() )
  } catch {
    db.end()
  }
}
