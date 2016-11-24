const path          = require('path'),
      express       = require('express'),
      app           = express();

app.get('*', function (req, res) {
	if (req.url === '/css/tachyons.css') {
		res.sendFile(path.join(__dirname, 'css', 'tachyons.css'));
	} else {
		res.sendFile(path.join(__dirname, 'index.html'));
	}
});

app.listen(3000, function (err) {
	if (err) {
		return console.error(err);
	}

	console.log('Listening at http://localhost:3000/');
});