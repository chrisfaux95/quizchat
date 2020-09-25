const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    category: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;