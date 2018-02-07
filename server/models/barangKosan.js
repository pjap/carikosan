console.log('models BARANG KOSAN')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var barangKamarSchema = new Schema({
    kosanId:{
        type: Schema.Types.ObjectId,
        ref: 'kosan',
        required:true
    },
    name: {type: String, required:true},
    isActive: {type: Boolean, required:true},
    tanggalBuang:{type:Date}
}, {timestamps:true})

var barangKamarModel = mongoose.model('BarangKamar', barangKamarSchema)

module.exports = barangKamarModel