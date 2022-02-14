function connectionCheck(pool) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        if (connection) connection.release()
        reject(err)
      } else {
        resolve(connection)
      }
    })
  })
}

module.exports = {
  connectionCheck: connectionCheck
}
