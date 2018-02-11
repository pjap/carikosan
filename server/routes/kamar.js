console.log('router KAMAR')
const express = require('express')
const router = express.Router()
const KamarCtr = require('../controllers/kamar')
const jwt = require('../helpers/jwt')

// upload image
const imagesMulter = require('../helpers/multer-images')
const upload = imagesMulter.multer.single('picture')
const GCPupload = imagesMulter.sendUploadToGCS

router.get('/', KamarCtr.findAll)
router.post('/', upload, GCPupload, KamarCtr.createKamar)
router.get('/', KamarCtr.singleKamar)
router.patch('/:kamarId', upload, GCPupload, KamarCtr.updateKamar)
// router.patch('/:kamarId', upload, GCPupload, KamarCtr.sewaKamar)
// router.get('/:kosanId', KamarCtr.kamarByKosan) //get kamar by Kosan
router.delete('/:kamarId', KamarCtr.findAll)



module.exports = router