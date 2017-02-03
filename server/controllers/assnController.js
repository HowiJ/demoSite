const mongoose  = require('mongoose');
const path      = require('path');

const Assn      = mongoose.model('Assn');

module.exports = {
  index: (req, res) => {
    console.log('ok');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    Assn.find({}, (err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        // res.json(data);
        console.log('asdf',data);
        res.json(data);
      }
    })
  },
  create: (req, res) => {
    console.log(req.body);
    new Assn(req.body).save(err => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.redirect('/assn');
      }
    })
  }
}