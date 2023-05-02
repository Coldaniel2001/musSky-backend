
const getError = async (err, req, res, next) => {

    if (err.status ===  401) {
      res.status(401).send({ error: err.name + ': ' + err.message })
    }
  }
  
  module.exports = {getError}