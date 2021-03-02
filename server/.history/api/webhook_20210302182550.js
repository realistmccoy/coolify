const stripeAPI = require('../stripe')

function webhook(req, res) {
  const sig = req.headers['stripe-signature']
  let event;

  try {
    event = stripeAPI.webhooks
  }catch(errors) {

  }
}