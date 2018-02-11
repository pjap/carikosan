console.log('router PENYEWA')
const express = require('express')
const router = express.Router()
const penyewaCtrl = require('../controllers/penyewa')

router.get('/', penyewaCtrl.getAll)
router.post('/', penyewaCtrl.create)
router.get('/:penyewaId', penyewaCtrl.singleId)
router.patch('/:penyewaId', penyewaCtrl.update)
router.delete('/:penyewaId', penyewaCtrl.delete)

module.exports = router