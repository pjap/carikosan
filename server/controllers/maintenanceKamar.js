console.log('controllers MAINTANANCE KAMAR')
const MaintenanceKamarModel = require('../models/MaintenanceKamar')

class MaintenanceKamar {
    constructor() {

    }

    static getAll(req, res) {
        MaintenanceKamarModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        MaintenanceKamarModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        MaintenanceKamarModel
            .findById({ _id: req.params.maintenanceKamarId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        MaintenanceKamarModel
            .findOneAndUpdate(
            { _id: req.params.maintenanceKamarId },
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
        MaintenanceKamarModel
            .findByIdAndRemove(
            { _id: req.params.maintenanceKamarId }
            )
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = MaintenanceKamar