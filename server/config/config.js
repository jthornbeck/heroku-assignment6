//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://japanglais:iTzmai1@ds123124.mlab.com:23124/homework', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyDnL8IY4T9HzcWxjBU706lGANeWD2sHme4'
  },
  port: 3000
};
