const path = require('path');
const video = require('../controllers/videoController.js');
const assn = require('../controllers/assnController.js');
const project = require('../controllers/projectController.js');

function auth (req, res, callback) {
  if (req.body.koopa && req.body.koopa == 'yes') {
    callback(req, res);
  } else {
    res.redirect('/authentication/error');
  }
}

module.exports = app => {
  app.get('/authentication/error', (req, res) => {
    res.send(`<h1>Authentication Error.</h1><p>You don't have permissions to do that bruv. </p><p>:[</p>`);
  })
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
      console.log('VIDEO')
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

  // Projects
  app.get('/projects', (req, res) => {
    project.index(req, res);
  })
  app.get('/projects/:id', (req, res) => {
    project.show(req, res);
  })
  app.post('/projects', (req, res) => {
    project.create(req, res);
  })

  // Fixes and Configsis
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  })
  app.get('/fix', (req, res) => {
    video.fix(req, res);
  })

}