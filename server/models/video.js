  // {_id: '12', 
  // title: 'Group Chat', 
  // month: 'January', 
  // year: 2017, 
  // thumbnail: '', 
  // postedBy: 'Howard Jiang', 
  // url: 'MX4fR9W56bw'},
const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: {type: String},
  month: {type: String, required: true},
  monthIndex: Number,
  year: {type: Number, required: true},
  thumbnail: {type: String},
  github: {type: String},
  description: {type: String},
  postedBy: {type: String, default: 'Howard Jiang'},
  url: {type: String, required: true},
  tag: {type: String, required: true}
}, {timestamps: true});

const AssnSchema = new mongoose.Schema({
  name: {type: String, required: true}
}, {timestamps: true});


mongoose.model('Video', VideoSchema);
mongoose.model('Assn', AssnSchema);