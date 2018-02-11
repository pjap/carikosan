console.log('controllers BARANG KOSAN')
const BarangKosanModel = require('../models/BarangKosan')

class BarangKosan {
    constructor() {

    }

    static getAll(req, res) {
        BarangKosanModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        BarangKosanModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        BarangKosanModel
            .findById({ _id: req.params.barangKosanId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        BarangKosanModel
            .findOneAndUpdate(
            { _id: req.params.barangKosanId },
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
        BarangKosanModel
            .findByIdAndRemove(
            { _id: req.params.barangKosanId }
            )
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = BarangKosan