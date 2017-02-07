const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  name: String,
  description: String,
  url: String,
  technologies: [String],
  imgs: [String]
})

mongoose.model('Project', ProjectSchema);