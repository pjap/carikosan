console.log('router BARANG KOSAN')
const express = require('express')
const router = express.Router()
const barangKosanCtrl = require('../controllers/barangKosan')


router.get('/', barangKosanCtrl.getAll)
router.post('/', barangKosanCtrl.create)
router.get('/:barangKosanId', barangKosanCtrl.singleId)
router.patch('/:barangKosanId', barangKosanCtrl.update)
router.get('/:barangKosanId', barangKosanCtrl.delete)


module.exports = router