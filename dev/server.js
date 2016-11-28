const path          = require('path'),
			webpack       = require('webpack'),
			express       = require('express'),
			devMiddleware = require('webpack-dev-middleware'),
			hotMiddleware = require('webpack-hot-middleware'),
			config        = require('../webpack.config'),
			app           = express(),
			compiler      = webpack(config);

app.use(devMiddleware(compiler, {
	publicPath: config.output.publicPath,
	historyApiFallback: true,
	noInfo: false,
	stats: {
		colors: true,
		chunks: false
	}
}));

app.use(hotMiddleware(compiler));

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