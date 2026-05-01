const express = require('express');
const app = express();
const path = require('path');
const port = 443;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/index.html'));
	//res.send('wassup');
});

app.listen(port, () => {
	console.log('ts is running');
});
