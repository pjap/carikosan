const express = require('express');
const router = express.Router();
const jwt = require('../helpers/jwt')
const MitraCtrl = require('../controllers/mitra')

// upload image
const imagesMulter = require('../helpers/multer-images')
const upload = imagesMulter.multer.single('avatar')
const GCPupload = imagesMulter.sendUploadToGCS

router.post('/login', MitraCtrl.login)
router.get('/info', jwt.isLogin, MitraCtrl.userInfo)
// DEV
router.get('/', jwt.isLogin, jwt.isAdmin, MitraCtrl.findAllMitra)
router.post('/', upload, GCPupload, MitraCtrl.createMitra) //register
router.get('/:id', MitraCtrl.findOneMitra)
router.put('/:id', MitraCtrl.updateMitra)
router.delete('/:id', MitraCtrl.deleteMitra)


module.exports = router