const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const path = require('path');

const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const passphrase = 'hi';
const credentials = {key: privateKey, passphrase, cert: certificate};

const httpsServer = https.createServer(credentials, app);

function ensureSecure(req, res, next) {
	if (req.secure) {
		return next();
	}
	res.redirect('https://' + req.hostname + req.originalUrl);
}

app.use(ensureSecure);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(443, () => {
	console.log('ts is running');
});
