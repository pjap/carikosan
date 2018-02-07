console.log('router BARANG KAMAR')
const express = require('express')
const router = express.Router()
const barangKamarCtrl = require('../controllers/barangKamar')


router.get('/', barangKamarCtrl.getAll)
router.post('/', barangKamarCtrl.create)
router.get('/:barangKamarId', barangKamarCtrl.singleId)
router.patch('/:barangKamarId', barangKamarCtrl.update)
router.get('/:barangKamarId', barangKamarCtrl.delete)


module.exports = router