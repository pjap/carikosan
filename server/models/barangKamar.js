console.log('models BARANG KAMAR')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var barangKamarSchema = new Schema({
    kamarId:{
        type:Schema.Types.ObjectId,
        ref: 'kamar',
        required:true
    },
},{timestamps:true})

var barangKamarModel = mongoose.model('BarangKamar', barangKamarSchema)

module.exports = barangKamarModel