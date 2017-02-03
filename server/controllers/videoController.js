const mongoose  = require('mongoose');
const path      = require('path');

const Video     = mongoose.model('Video');

module.exports = {
  index: (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

    Video.find({})
    .sort('-year')
    .sort('-monthIndex')
    .sort('title')
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        // res.json(data);
        res.json(data);
      }
    });

  },
  show: (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

    Video.findOne({_id: req.params.id}, (err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: (req, res) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    req.body.monthIndex = months.indexOf(req.body.month);
    Video.find({url: req.body.url}, (err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        if (data.length > 0) {
          res.json({errors: 'nope.'})
        } else {
          let video = new Video(req.body);
          video.save((err, data) => {
            if (err) {
              console.log(err);
            }
              res.redirect('/videos');
          })
        }
      }
    })

  },
  new: (req, res) => {
    if (process.env.TEST == 'true') {
      res.sendFile(path.join(__dirname, '../../create.html'));
    }
  },
  update: (req, res) => {
    console.log('wtf');
    Video.findOne({_id: req.params.id}, (err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        console.log(data);
        console.log(req.body);
        for (let i in req.body) {
          data[i] = req.body[i];
        }
        console.log(data);

        data.save(err => {
          if (err) {
            console.log(err);
            res.json(err); 
          } else {
            res.redirect(303, '/videos');
          }
        })
      }
    })
  },
  fix: (req, res) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Video.find({}, (err, data) => {

    //   for (let dat of data) {
    //     dat.monthIndex = months.indexOf(dat.month);
    //     dat.save();
    //   }
    //   console.log(data);
    //   res.json(data);
    // })
    console.log("'fix' method not in use");
    res.json({no: 'no'});
  }
}