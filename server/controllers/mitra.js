const MitraModel = require('../models/Mitra')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10)
require('dotenv').config()

class MitraClass {
    constructor() {

    }

    static findAllMitra(req, res) {
        MitraModel.find()
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static createMitra(req, res) {
        // res.send(typeof req.file.cloudStoragePublicUrl)
        var hash = bcrypt.hashSync(req.body.password, salt)
        MitraModel.create({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role,
            avatar: req.file.cloudStoragePublicUrl
        })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findOneMitra(req, res) {
        MitraModel.findOne({ _id: req.params.id })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateMitra(req, res) {
        MitraModel.findOneAndUpdate(
            { _id: req.params.id }, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    phone: req.body.phone,
                    updatedAt: new Date()
                }
            },
            { new: true }
        ).then(result => {
            res.send(result)
        }).catch(err => {
            console.error(err)
            res.send(err)
        })
    }

    static deleteMitra(req, res) {
        MitraModel.findOneAndRemove({ _id: req.params.id })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static login(req, res) {
        MitraModel.findOne({
            $or:
                [
                    { username: req.body.username },
                    { email: req.body.username }
                ]
        })
            .then(data => {
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    let token = jwt.sign(
                        {
                            id: data._id,
                            username: data.username,
                            email: data.email,
                            phone: data.phone,
                            role: data.role
                        }, process.env.USER_SECRET)
                    res.send({ userToken: token, msg: 'success login' })
                } else {
                    res.send('wrong Password')
                }
            }).catch(err => {
                res.send('username does not exist !')
            })
    }

    static userInfo(req, res) {
        res.send(req.locals)
    }

}

module.exports = MitraClass