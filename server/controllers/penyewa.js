console.log('controllers PENYEWA\n')
const PenyewaModel = require('../models/Penyewa')

class Penyewa {
    constructor() {

    }

    static getAll(req, res) {
        PenyewaModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        PenyewaModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        PenyewaModel
            .findById({ _id: req.params.penyewaId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        PenyewaModel
            .findOneAndUpdate(
            { _id: req.params.penyewaId },
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
        PenyewaModel
            .findByIdAndRemove(
            { _id: req.params.penyewaId }
            )
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

}


module.exports = Penyewa