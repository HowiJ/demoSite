const mongoose = require('mongoose');
const Project = mongoose.model('Project');

const projects = [
  { _id: 0, name: 'CodeBoard',  description: 'Socket IO Board', url: 'http://codeboard.vkutuyev.com', technologies: ['Node', 'Express', 'Socket.io', 'HTML Canvas'], imgs: [{name: 'biker', type: 'jpeg'}, {name: 'board', type: 'jpeg'}] },
  { _id: 1, name: 'Demos',      description: 'Demos Website',   url: 'http://demos.howardjiang.com',  technologies: ['Node', 'Express', 'MongoDB', 'React'],         imgs: [{name: 'sydney', type: 'jpeg'}, {name: 'tree', type: 'jpeg'}] },
  { _id: 2, name: 'NodeSC',     description: 'Node Scaffold',   url: 'http://google.com',             technologies: ['Node', 'Express', 'MongoDB', 'Bash'],          imgs: [{name: 'veggies', type: 'jpeg'}] },
  { _id: 3, name: 'Project 4',        description: 'Project 4',       url: 'http://google.com',             technologies: ['Node', 'Express'],                             imgs: [{name: 'board', type: 'jpeg'}] },
  { _id: 4, name: 'Letters4Animals',  description: 'Letters4Animals', url: 'http://google.com',             technologies: ['Node', 'Express'],                             imgs: [{name: 'biker', type: 'jpeg'}] },
  { _id: 5, name: 'Project 6      ',  description: 'Letters4Animals', url: 'http://google.com',             technologies: ['Node', 'Express'],                             imgs: [{name: 'tree', type: 'jpeg'}] }
];

module.exports = {
  index: (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    Project.find({}, (err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  show: (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    Project.findOne({_id: req.params.id}, (err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: (req, res) => {    
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    const project = new Project(req.body);
    project.save(err => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.redirect('/projects');
      }
    })
  },
  add: (req, res, field) => {
    Project.findOne({_id: req.params.id}, (err, data) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        if (field == 'tech') {
          data.technologies.push(req.body.name);
        }
        if (field == 'img') {
          data.imgs.push(req.body.name);
        }
        data.save(function(err, data) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            res.redirect('/projects');
          }
        })
      }
    })
  }
}