console.log('controllers BARANG KOSAN')
const barangKosanModel = require('../models/barangKosan')

class BarangKosan {
    constructor() {

    }

    static getAll(req, res) {
        barangKosanModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        barangKosanModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        barangKosanModel
            .findById({ _id: req.params.barangKosanId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        barangKosanModel
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
        barangKosanModel
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