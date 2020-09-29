const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Show Number, Air Date, Round, Category, Value, Question, Answer

const JeopardySchema = new Schema({
    showNumber: {type: Number},
    airDate: {type: String},
    round: {type: String},
    category: {type: String},
    value: {type: String},
    question: {type: String},
    answer: {type: String}
},
{ collection: "Jeopardy" });

const Jeopardy = mongoose.model("Jeopardy", JeopardySchema);

module.exports = Jeopardy;