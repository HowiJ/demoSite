////////////////////////////////////////////////////////////
//                        REQUIRES                        //
////////////////////////////////////////////////////////////
const mongoose    = require('mongoose');
const path        = require('path');
const fs          = require('fs');
////////////////////////////////////////////////////////////
//                     DATABASE CONFIG                    //
////////////////////////////////////////////////////////////
const server      = 'mongodb://localhost/';
const database    = 'demoSite';
mongoose.connect(server+database);
////////////////////////////////////////////////////////////
//                     DRAGOON PATHING                    //
////////////////////////////////////////////////////////////
const models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
    if( file.indexOf('.js') >= 0 ) {
        require(models_path + '/' + file);
    }
})
