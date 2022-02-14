var mysql = require('mysql')
var databaseConfig = require('../config/database')
var connection = mysql.createPool(databaseConfig)

module.exports = connection
