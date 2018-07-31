const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const items = require('./items');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + './../dist'));

app.get('/get-items', (req, res) => {
	res.json(items);
});

app.post('/checkout', (req, res) => {
	const hasError = !req.body.items;
	let response;

	if (hasError) {
		response = {
			status: 'error',
			error: 'Invalid request.',
		};
	} else {
		response = {
			status: 'success',
			message: 'Your order was placed successfully.',
		};
	}

	res.json(response);
});


// to allow for refreshing the page without 'CANNOT GET /route' but not currently working. 
// Network tab confirms receiving bundle file (via html script tag) but not appearing on screen. 
// Thinking problem might be receiving file type

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './../dist/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(3001, () => console.log('Shopping Cart API app listening on port 3001!'));
