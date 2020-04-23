const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeepSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Keep = mongoose.model('keep', KeepSchema);