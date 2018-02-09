console.log('controllers MAINTANANCE KAMAR')
const maintenanceKamarModel = require('../models/maintenanceKamar')

class MaintenanceKamar {
    constructor() {

    }

    static getAll(req, res) {
        maintenanceKamarModel.find({})
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })

    }

    static create(req, res) {
        maintenanceKamarModel.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static singleId(req, res) {
        maintenanceKamarModel
            .findById({ _id: req.params.maintenanceKamarId })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        maintenanceKamarModel
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
        maintenanceKamarModel
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