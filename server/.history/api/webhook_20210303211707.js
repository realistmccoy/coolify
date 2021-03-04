const stripeAPI = require('../stripe');

const webHookHandlers = {
	'checkout.session.completed': (data) => {
		console.log('Checkout completed successfully', data);
		// other business logic
	},

	'payment_intent.succeeded': (data) => {
		console.log('Payment succeeded', data);
	},
	'payment_intent.payment_failed': (data) => {
		console.log('Payment Failed', data);
	},
};

function webhook(req, res) {
	const sig = req.headers['stripe-signature'];
	let event;

	try {
		event = stripeAPI.webhook.constructEvent(req['rawBody'], sig, process.env.WEB_HOOK_SECRET);
	} catch (errors) {
		return res.status(400).send('Webhook error ${error.message}');
	}

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;
		console.log('Event data', session);
	}
}

module.exports = webhook;
