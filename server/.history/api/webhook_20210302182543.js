const stripeAPI = require('../stripe')

function webhoook(req, res) {
  const sig = req.headers['stripe-signature']
  let event;

  try {
    event = stripeAPI.webhoooks
  }catch(errors) {

  }
}