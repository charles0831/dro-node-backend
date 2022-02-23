const membersModel = require("../models/members");
const code = require("../constants/code");
const message = require("../constants/message");

const membersService = {
  getMemberList: getMemberList,
};

function getMemberList(data) {
  return new Promise((resolve, reject) => {
    membersModel
      .getMemberList(data)
      .then((res) => {
        resolve({ code: code.OK, message: "", data: res });
      })
      .catch((err) => {
        if (err.message === message.INTERNAL_SERVER_ERROR)
          reject({
            code: code.INTERNAL_SERVER_ERROR,
            message: err.message,
            data: {},
          });
        else reject({ code: code.BAD_REQUEST, message: err.message, data: {} });
      });
  });
}

module.exports = membersService;
