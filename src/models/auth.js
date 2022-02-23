const db = require("../database/database");
const message = require("../constants/message");
const table = require("../constants/table");
const bcrypt = require("bcrypt-nodejs");

const saltRounds = 10;

const authModel = {
  login: login,
  signup: signup,
};

function login(data) {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM " + table.MEMBERS + " WHERE email = ? ";

    db.query(query, [data.email], (error, rows, fields) => {
      if (error) {
        reject({ message: message.INTERNAL_SERVER_ERROR });
      } else {
        if (rows.length > 0) {
          bcrypt.compare(
            data.password,
            rows[0].password,
            function (error, result) {
              if (error) {
                reject({ message: message.INVALID_PASSWORD });
              } else {
                if (result) {
                  resolve({ uid: rows[0].id, role: rows[0].role });
                } else {
                  reject({ message: message.INVALID_PASSWORD });
                }
              }
            }
          );
        } else {
          reject({ message: message.ACCOUNT_NOT_EXIST });
        }
      }
    });
  });
}

function signup(data) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const password = bcrypt.hashSync(data.password, salt);

  let exist_query = "SELECT * FROM " + table.MEMBERS + " WHERE email = ? ";

  let query =
    "INSERT INTO " + table.MEMBERS + " (email, password) VALUES (?, ?) ";

  return new Promise((resolve, reject) => {
    db.query(exist_query, [data.email], (error, rows, fields) => {
      if (error) {
        reject({ message: message.INTERNAL_SERVER_ERROR });
      } else {
        if (rows.length > 0) {
          reject({ message: message.ACCOUNT_EXIST });
        } else {
          db.query(query, [data.email, password], (error, rows, fields) => {
            if (error) {
              reject({ message: message.INTERNAL_SERVER_ERROR });
            } else {
              resolve({ id: rows.insertId });
            }
          });
        }
      }
    });
  });
}

module.exports = authModel;
