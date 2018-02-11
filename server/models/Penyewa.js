console.log('controllers PENYEWA')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var penyewaSchema = new Schema({
    penyewaNama: { type: String, required: true },
    penyewaKTP: { type: String, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required:true},
}, { timestamps: true })

var penyewa = mongoose.model('penyewa', penyewaSchema)

module.exports = penyewa