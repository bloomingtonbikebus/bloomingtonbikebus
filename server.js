const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'src/index.html'));
});

const PORT = 443;
app.listen(PORT, () => {
	console.log('ts is running');
});
