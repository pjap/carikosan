const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const cors       = require('cors')
const app        = express()

require('dotenv').config


var atlasURI = 'mongodb://cari-kosan:cari-kosan-mantan-hacktiv8@cluster0-shard-00-00-dwnma.mongodb.net:27017,cluster0-shard-00-01-dwnma.mongodb.net:27017,cluster0-shard-00-02-dwnma.mongodb.net:27017/admin?replicaSet=Cluster0-shard-0&ssl=true'

mongoose.connect('mongodb://localhost/cari-kosan', (err) => {
// mongoose.connect(atlasURI, (err) => {
    if (err) {console.log('NOT CONNECTED', err)}
    else{console.log('mongoose connected')}
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// const user  = require('./routes/user')
const mitra = require('./routes/mitra')
const kosan = require('./routes/kosan')
const kamar = require('./routes/kamar')
const penyewa = require('./routes/penyewa')
const pengurus = require('./routes/pengurus')
const kosTransaction = require('./routes/kosTransaction')
const kosHarian = require('./routes/kosHarian')
const barangKamar = require('./routes/barangKamar')
const barangKosan = require('./routes/barangKosan')
const maintenanceKamar= require('./routes/maintenanceKamar')
const maintenanceKosan = require('./routes/maintenaceKosan')


// app.use('/user', user)
app.use('/mitra', mitra)
app.use('/kosan', kosan)
app.use('/kamar', kamar)
app.use('/kosTransaction', kosTransaction)
app.use('/kosHarian', kosHarian)
app.use('/barangKamar', barangKamar)
app.use('/barangKosan', barangKosan)
app.use('/maintenanceKamar', maintenanceKamar)
app.use('/maintenanceKosan', maintenanceKosan)
app.use('/pengurus', pengurus)
app.use('/penyewa', penyewa)


var port = process.env.PORT || 3000
app.listen(port,(err)=>{ 
    if (err) console.log('ERROR PORT: '+ port)
    console.log('PORT: ' + port + ' SERVER')
})


