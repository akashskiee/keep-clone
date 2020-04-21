const mongoose = require('mongoose');

const KeepSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
});

module.exports = Keep = mongoose.model('keep', KeepSchema);