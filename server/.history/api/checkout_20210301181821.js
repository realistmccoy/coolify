const stripeAPI = require('./stripe')

async function createCheckoutSession(req, res) {
  //react app url
  const domainUrl = process.env.WEB_APP_URL;
  const {line_items, customer_email} = req.body;
  //check req body has line items & email
  if (line_items || customer_email) {
    return res.status(400).json({errors: 'missing required session parameters'})
  }

  let session;

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_url: {allowed_countries: ['US', 'GB']}
    });
    res.status(200).json({sessionID: session.id, })
  } catch (err) {
    console.log(err);
  }
}