const path = require('path');
const video = require('../controllers/videoController.js');
const assn = require('../controllers/assnController.js');

module.exports = app => {
  app.get('/new', (req, res) => {
    video.new(req, res);
  })
  app.get('/videos', (req, res) => {
    video.index(req, res);
  })
  app.get('/videos/:id', (req, res) => {
    video.show(req, res);
  })
  app.post('/videos', (req, res) => {
    if (!req.small) {
      res.redirect('/videos');
      return;
    }
    video.create(req, res);
  })
  app.put('/videos/:id', (req, res) => {
    if (!req.small) {
      res.redirect('/videos');
      return;
    }
    video.update(req, res);
  })
  app.delete('/videos/:id', (req, res) => {
    video.destroy(req, res);
  })

  app.get('/assn', (req, res) => {
    assn.index(req, res);
  })
  app.post('/assn', (req, res) => {
    assn.create(req, res);
  })

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  })
  app.get('/fix', (req, res) => {
    video.fix(req, res);
  })

}