const express = require('express');
const embed = require('./embed.json');

const app = express();

app.get('/', (req, res) => {
    res.send(embed);
});

app.listen(3000, () => {
    console.log('Listening on port 3000.');
});