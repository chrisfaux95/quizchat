const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    date: { type: Date },
    message: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;