const firebase = require('../firebase')

async function (req, res, next) {
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    
  }
}