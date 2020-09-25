const db = require("../models");

module.exports = {
    findAllRecent: (req, res) => {
        db.Score
            .find(req.query)
            .sort({ date: 'desc' })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllHigh: (req, res) => {
        db.Score
            .find(req.query)
            .sort({ value: 'desc' })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Score
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Score
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Score
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Score
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}