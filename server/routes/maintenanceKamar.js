console.log('ROUTER MAINTENANCE KAMAR')
const express = require('express')
const mainKamarCtrl = require('../controllers/maintenanceKamar')
const router = express.Router()

router.get('/',mainKamarCtrl.getAll)
router.post('/', mainKamarCtrl.create)
router.get('/:maintenanceKamarId', mainKamarCtrl.singleId)
router.patch('/:maintenanceKamarId', mainKamarCtrl.update)
router.delete('/:maintenanceKamarId', mainKamarCtrl.delete)

module.exports = router