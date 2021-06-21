let env = process.env.NODE_ENV || 'development';
// let config = require('./configuration/config')[env];
let mongodb;

const mongoClient = require('mongodb').MongoClient;
// const mongoDbUrl = `mongodb://progadminCON:progadmincon@${config.database.host}:${config.database.port}/CONFIGURATION?authSource=CONFIGURATION`
const mongoDbUrl = `mongodb://${config.database.host}:${config.database.port}/CONFIGURATION?authSource=CONFIGURATION`



function connect(callback){
    mongoClient.connect(mongoDbUrl,{ useNewUrlParser: true }, (err, db) => {
        mongodb = db.db('CONFIGURATION');
        callback();
    });
}

function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {connect, get, close};