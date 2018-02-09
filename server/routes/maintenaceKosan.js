console.log('ROUTER MAINTENANCE KOSAN')
const express = require('express')
const mainKosanCtrl = require('../controllers/maintenanceKosan')
const router = express.Router()

router.get('/', mainKosanCtrl.getAll)
router.post('/', mainKosanCtrl.create)
router.get('/:maintenanceKosanId', mainKosanCtrl.singleId)
router.patch('/:maintenanceKosanId', mainKosanCtrl.update)
router.delete('/:maintenanceKosanId', mainKosanCtrl.delete)

module.exports = router