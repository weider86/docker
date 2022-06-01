const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi Docker with node!!!');
});

app.listen(3000);
