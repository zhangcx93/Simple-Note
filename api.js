var restful = require('node-restful'),
  mongoose = restful.mongoose;

mongoose.connect("mongodb://localhost/resources");

module.exports = function (app) {
  var Tags = app.Tags = restful.model('Tags', mongoose.Schema({
    name: "string",
    color: {
      type: "string",
      default: "white"
    }
  })).methods(['get', 'post', 'put', 'delete']);
  Tags.register(app, '/getTag');


  var Notes = app.Notes = restful.model('Notes', mongoose.Schema({
    title: {
      type: "string",
      default: ""
    },
    content: "string",
    tags: {
      type: 'array',
      default: []
    },
    date: {
      type: 'date',
      default: Date.now()
    },
    archieved: {
      type: 'boolean',
      default: false
    }
  }))
    .methods(['get', 'post', 'put', 'delete']);
  Notes.register(app, '/getNote');
}