console.log('router KOS TRANSACTION')

const express = require('express')
const router = express.Router()
const kosTransactionCtrl = require('../controllers/kosTransaction')


router.get('/', kosTransactionCtrl.getAll)
router.post('/', kosTransactionCtrl.create)
router.get('/:kosTransactionId', kosTransactionCtrl.singleId)
router.patch('/:kosTransactionId', kosTransactionCtrl.update)
router.get('/:kosTransactionId', kosTransactionCtrl.delete)


module.exports = router