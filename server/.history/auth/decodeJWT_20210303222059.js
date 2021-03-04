const firebase = require('../firebase')

async function (req, res, next) {
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    try {
      const decodedToken = await firebase.auth.verifyIdToken(idToken)
      req['currentUser'] = decodedToken
    } catch (e) {

    }
  }
}