console.log('controllers MAINTENANCE KOSAN')
const maintenanceKosanModel = require('../models/maintenanceKosan')


class MaintenanceKosan {
    constructor() {

    }

    static getAll(req, res) {
        maintenanceKosanModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        maintenanceKosanModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        maintenanceKosanModel
            .findById({ _id: req.params.maintenanceKosanId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        maintenanceKosanModel
            .findOneAndUpdate(
            { _id: req.params.maintenanceKosanId },
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
        maintenanceKosanModel
            .findByIdAndRemove(
            { _id: req.params.maintenanceKosanId  }
            )
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = MaintenanceKosan