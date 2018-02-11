console.log('controllers KOS TRANSACTION\n')
const KosTransactionModel = require('../models/KosTransaction')

class KosTransaction {
    constructor() {
        
    }

    static getAll (req,res){
        KosTransactionModel.find({})
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            res.send(err)
        })

    }

    static create(req, res) {
        KosTransactionModel.create(req.body)
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            res.send( err )
        })
    }

    static singleId(req, res) {
        KosTransactionModel
        .findById({_id:req.params.KosTransactionId})
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            res.send(err)
        })
    }

    static update(req, res) {
        KosTransactionModel
        .findOneAndUpdate(
            {_id:req.params.KosTransactionId},
            req.body,
            {new:true}
        )
        .then( result => {
            res.send(result)
        })
        .catch( err => {
            res.send(err)
        })
    }

    static delete(req, res) {
        KosTransactionModel
        .findByIdAndRemove(
            {_id:req.params.KosTransactionId}
        )
        .then(result => {
            res.send(result)
        })
        .catch( err => {
            res.send(err)
        })
    }

}

module.exports = KosTransaction