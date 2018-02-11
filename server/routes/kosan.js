console.log('model KOSAN')
const express = require('express');
const router = express.Router();
// const jwt = require('../helpers/jwt')
const KosanCtrl = require('../controllers/kosan')

// upload image
const imagesMulter = require('../helpers/multer-images')
// const upload = imagesMulter.multer.fields([{name:'fotoKosan', maxCount:1},{name:'pengurusKTP', maxCount:1}])
const upload = imagesMulter.multer.single('pengurusKTP')
const GCPupload = imagesMulter.sendUploadToGCS

// DEV
router.get('/', KosanCtrl.findAllKosan)
// router.get('/', jwt.isLogin, jwt.isAdmin, MitraCtrl.findKosan)
router.post('/', upload, GCPupload, KosanCtrl.createKosan) //register
router.get('/:id', KosanCtrl.findOneKosan)
router.patch('/:id', KosanCtrl.updateKosan)
router.patch('/addroom/:id', KosanCtrl.tambahKamarKosan)
router.delete('/:id', KosanCtrl.deleteKosan)


module.exports = router