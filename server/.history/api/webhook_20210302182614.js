const stripeAPI = require('../stripe')

function webhook(req, res) {
  const sig = req.headers['stripe-signature']
  let event;

  try {
    event = stripeAPI.webhook.constructEvent()
  }catch(errors) {

  }
}