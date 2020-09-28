const db = require("../models");

module.exports = {
    findById: (req, res) => {
        db.Jeopardy
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        db.Jeopardy
            .findById(res.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findRandom: (req, res) => {
        db.Jeopardy
        .findOne()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}