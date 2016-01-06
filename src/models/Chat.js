var mongoose = require('mongoose');

// create a schema for chat
var ChatSchema = new mongoose.Schema({
    created: Date,
    content: String,
    username: String,
    room: String
});

module.exports = mongoose.model('Chat', ChatSchema);
