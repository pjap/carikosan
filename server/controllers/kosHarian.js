console.log('controllers KOS HARIAN')
const KosHarianModel = require('../models/KosHarian')

class KosHarian {
    constructor() {

    }

    static getAll(req, res) {
        KosHarianModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        KosHarianModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        KosHarianModel
            .findById({ _id: req.params.kosHarianId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        KosHarianModel
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
        KosHarianModel
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