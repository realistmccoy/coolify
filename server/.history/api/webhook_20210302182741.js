const stripeAPI = require('../stripe')

function webhook(req, res) {
  const sig = req.headers['stripe-signature']
  let event;

  try {
    event = stripeAPI.webhook.constructEvent(req['rawBody'], sig, process.env.WEB_HOOK_SECRET)
  }catch(errors) {
    return res.status(400).send('Webhook error ${error.message}')
  }

  if (event.type === '')
}