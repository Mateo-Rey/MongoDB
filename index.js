const { MongoClient, ServerApiVersion } = require('mongodb');

const { uri } = require('./dbsecrets.js')

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

const db = client.db('sample_mflix')

db.collection('movies').findOne({title: 'Back to the Future'}, (err,res) => { console.log(res); console.log(err); client.close()})
