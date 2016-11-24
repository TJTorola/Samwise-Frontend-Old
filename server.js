const path          = require('path'),
      express       = require('express'),
      app           = express();

app.get('*', function (req, res) {
	const folder = req.url.split('/')[1];
	if (folder === 'css' || folder === 'js') {
		res.sendFile(path.resolve(`.${ req.url }`));
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