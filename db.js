const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

const db =  low(adapter)

//set database
db.defaults({ users:[],
  accounts:[],
  sessions:[],
  transfers:[]
 })
  .write();

module.exports = db;