console.log('models MITRA\n')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mitraSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    passwordConf: { type: String, required: true },
    alamat: {type: String, required: true},
    fullname: { type: String },
    kuasaKTP: { type: String },
    active: false,
    email: { type: String, required: true },
    phone: { type: String, required: true },
    listKosan: [
        {
            type: Schema.Types.ObjectId,
            ref: 'kosan'
        }
    ]
}, { timestamps: true })

var mitra = mongoose.model('mitra', mitraSchema);

module.exports = mitra