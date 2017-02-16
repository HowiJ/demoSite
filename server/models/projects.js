const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  name:          { type: String, required: true },
  description:   { type: String, required: true },
  url:           { type: String, required: true },
  technologies: [{ type: String }],
  imgs:         [{ type: String }]
})

mongoose.model('Project', ProjectSchema);