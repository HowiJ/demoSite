const bodyParser = require('body-parser');
const express = require('express');
const path    = require('path');
const app     = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require(path.join(__dirname, './server/config/mongoose.js'));
require(path.join(__dirname, './server/config/routes.js'))(app);

app.listen(8008, () => {
  console.log('DemoSiteFull on 8008');
})