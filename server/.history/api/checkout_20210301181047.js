const stripeAPI = require('./stripe')

async function createCheckoutSession(req, res) {
  //react app url
  const domainUrl = process.env.WEB_APP_URL;
  const {line_items, customer_email} = req.body;
  
}