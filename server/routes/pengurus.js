console.log('router PENGURUS')
const express = require('express')
const router = express.Router()
const pengurusCtrl = require('../controllers/pengurus')

router.get('/', pengurusCtrl.getAll)
router.post('/', pengurusCtrl.create)
router.get('/:pengurusId', pengurusCtrl.singleId)
router.patch('/:pengurusId', pengurusCtrl.update)
router.delete('/:pengurusId', pengurusCtrl.delete)

module.exports = router