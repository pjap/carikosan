console.log('controllers BARANG KAMAR')
const BarangKamarModel = require('../models/BarangKamar')

class BarangKamar {
    constructor() {
        
    }

    static getAll(req, res) {
        BarangKamarModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        BarangKamarModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        BarangKamarModel
            .findById({ _id: req.params.barangKamarId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        BarangKamarModel
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
        BarangKamarModel
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