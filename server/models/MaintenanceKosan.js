console.log('controller MAINTENANCE KOSAN\n')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var maintenanceKosanSchema = new Schema({
    barangKosanId: {
        type: Schema.Types.ObjectId,
        ref: 'barangKosan',
        required: true
    },
    kosanId: {
        type: Schema.Types.ObjectId,
        ref: 'kosan',
        required: true
    },
    tanggalPeriksa: { type: Date, required: true },
    status: { type: Boolean, required: true },
    keterangan: { type: String }
}, { timestamps: true })

var maintenanceKosanModel = mongoose.model('maintenanceKosan', maintenanceKosanSchema)
module.exports = maintenanceKosanModel