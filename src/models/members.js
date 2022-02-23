const db = require("../database/database");
const message = require("../constants/message");
const table = require("../constants/table");

const membersModel = {
  getMemberList: getMemberList,
};

function getMemberList(data) {
  let countQuery = `SELECT count(*) AS count FROM ${table.MEMBERS}`;

  return new Promise((resolve, reject) => {
    db.query(countQuery, (error, rows, fields) => {
      if (error) {
        reject({ message: message.INTERNAL_SERVER_ERROR });
      } else {
        let count = rows.length > 0 ? rows[0].count : 0;
        let selectQuery = `SELECT * FROM ${
          table.MEMBERS
        } ORDER BY created_date DESC LIMIT ${data.page * data.rowsPerPage}, ${
          data.rowsPerPage
        }`;
        db.query(selectQuery, (error, rows, fields) => {
          console.log("!!!!!!!!!!!!!", rows);
          if (error) {
            console.log("!!!!!!!!!!!!!", error.message);
            reject({ message: message.INTERNAL_SERVER_ERROR });
          } else {
            resolve({ count: count, rows: rows });
          }
        });
      }
    });
  });
}

module.exports = membersModel;
