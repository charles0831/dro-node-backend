const db = require('../database/database')
const message  = require('../constants/message')
const table  = require('../constants/table')
const bcrypt = require('bcrypt-nodejs')

const authModel = {
  login: login,
}

function login(data) {
  return new Promise((resolve, reject) => {
    let query = 'SELECT * FROM ' + table.MEMBERS + ' WHERE user_id = ? '

    db.query(query, [ data.userId ], (error, rows, fields) => {
      if (error) {
        reject({ message: message.INTERNAL_SERVER_ERROR })
      } else {
        if (rows.length > 0) {
          bcrypt.compare(data.password, rows[0].password, function(error, result) {
            if (error) {
              reject({ message: message.INVALID_PASSWORD })
            } else {
              if (result) {
                resolve({ uid: rows[0].id, role: rows[0].role })
              } else {
                reject({ message: message.INVALID_PASSWORD })
              }
            }                
          })
        } else {
          reject({ message: message.ACCOUNT_NOT_EXIST })
        }
      }
    })
  })
}

module.exports = authModel
