console.log('model KOS HARIAN \n')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var kosHarianSchema = new Schema({
    kosanId:{
        type: Schema.Types.ObjectId,
        ref: 'kosan',
        requried: true
    },
    kamarId:{
        type: Schema.Types.ObjectId,
        ref:'kamar',
        requried:true
    },
    penyewaId:{
        type: Schema.Types.ObjectId,
        ref: 'penyewa',
        requried: true
    },
    harga:{type: Number, required:true}

},{timestamps:true})

var kosHarianModel = mongoose.model('KosHarian', kosHarianSchema)
module.exports = kosHarianModel