console.log('controllers BARANG KAMAR')
const barangKamarModel = require('../models/barangKamar')

class BarangKamar {
    constructor() {
        
    }

    static getAll(req, res) {
        barangKamarModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        barangKamarModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        barangKamarModel
            .findById({ _id: req.params.barangKamarId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        barangKamarModel
            .findOneAndUpdate(
            { _id: req.params.barangKamarId },
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
        barangKamarModel
            .findByIdAndRemove(
            { _id: req.params.barangKamarId }
            )
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = BarangKamar