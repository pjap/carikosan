const mongoose = require('mongoose')
const Schema = mongoose.Schema

var pengurusSchema = new Schema({
    pengurusNama: { type: String, required: true },
    pengurusKTP: { type: String, required: true },
    pengurusEmail: { type: String, required: true },
    pengurusKepemilikan: { type: String, required: true },
}, { timestamps: true })

var pengurus = mongoose.model('pengurus', pengurusSchema)

module.exports = pengurus