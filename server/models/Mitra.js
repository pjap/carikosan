const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mitraSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    passwordConf: { type: String, required: true },
    fullname: { type: String },
    avatar: { type: String },
    active: false,
    email: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true })

var mitra = mongoose.model('mitra', mitraSchema);

module.exports = mitra