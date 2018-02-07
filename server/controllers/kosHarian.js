console.log('controllers KOS HARIAN')
const kosHarianModel = require('../models/kosHarian')

class KosHarian {
    constructor() {

    }

    static getAll(req, res) {
        kosHarianModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        kosHarianModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        kosHarianModel
            .findById({ _id: req.params.kosHarianId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        kosHarianModel
            .findOneAndUpdate(
            { _id: req.params.kosHarianId },
            req.body,
            { new: true }
            )
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        kosHarianModel
            .findByIdAndRemove(
            { _id: req.params.kosHarianId }
            )
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = KosHarian