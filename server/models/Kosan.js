const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kosanSchema = new Schema({
    mitraId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: { type: String, unique: true, required: true },
    fullAddress: { type: String, required: true },
    RT: { type: String, required: true},
    RW: { type: String, required: true},
    kelurahan: { type: String, required: true },
    kecamatan: { type: String, required: true },
    kotaDesa: { type: String, required: true },
    provinsi: { type: String, required: true },
    kodepos: { type: String, required: true },
    pengurusNama: { type: String, required: true},
    pengurusEmail: { type: String, required: true},
    pengurusKTP: { type: String, required: true},
    statusKepemilikan: {type:String},
    kamarList:[{
        type: Schema.Types.ObjectId,
        ref: 'kamar'
    }]
}, { timestamps: true })



var kosan = mongoose.model('kosan', kosanSchema);

module.exports = kosan