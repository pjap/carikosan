const express = require('express');
const router = express.Router();
const jwt = require('../helpers/jwt')
const MitraCtrl = require('../controllers/mitra')

// upload image
const imagesMulter = require('../helpers/multer-images')
const upload = imagesMulter.multer.single('kuasaKTP')
const GCPupload = imagesMulter.sendUploadToGCS

router.post('/login', MitraCtrl.login)
router.get('/info', jwt.isLogin, MitraCtrl.userInfo)
// DEV
router.get('/', MitraCtrl.findAllMitra)
// router.get('/', jwt.isLogin, jwt.isAdmin, MitraCtrl.findAllMitra)
router.post('/', upload, GCPupload, MitraCtrl.createMitra) //register
router.get('/:id', MitraCtrl.findOneMitra)
router.put('/:id', upload, GCPupload,MitraCtrl.updateMitra)
router.patch('/addkosan/:id', MitraCtrl.addKosanMitra)
router.delete('/:id', MitraCtrl.deleteMitra)


module.exports = router