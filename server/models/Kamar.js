const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kamarSchema = new Schema({
    kosanId: { // populate address from kosan
        type: Schema.Types.ObjectId,
        ref: 'kosan'
    },
    name: { type: String, unique: true, required: true },
    fotoKamar: { type: String },
    luas: { type: String},
    price: { type: Number, required: true },
    available: true,
    promo: [],
    category: [], // AC, kamar mandi dalam, kamar mandi luar, 
    penyewa: {
        type: Schema.Types.ObjectId,
        ref: 'penyewa',
        required: true
    }
    // penyewaNama: {type:String},
    // penyewaKTP: {type:String},
    // checkIn: {type: Date},
    // checkOut: {type: Date},
}, { timestamps: true })

var kamar = mongoose.model('kamar', kamarSchema);

module.exports = kamar
