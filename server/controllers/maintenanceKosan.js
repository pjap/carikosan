console.log('controllers MAINTENANCE KOSAN')
const MaintenanceKosanModel = require('../models/MaintenanceKosan')


class MaintenanceKosan {
    constructor() {

    }

    static getAll(req, res) {
        MaintenanceKosanModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        MaintenanceKosanModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        MaintenanceKosanModel
            .findById({ _id: req.params.maintenanceKosanId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        MaintenanceKosanModel
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
        MaintenanceKosanModel
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