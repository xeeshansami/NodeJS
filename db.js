let url = "mongodb://localhost:27017/";
let dbName = "mydb";
let MongoClient = require('mongodb').MongoClient;
let mongodb;
function connect(callback){
    // Connect to the db
    MongoClient.connect(url, { useUnifiedTopology: true},function(err, db) {
        mongodb=db.db("mydb")
        callback(err);
    });
 /*   MongoClient.connect(url+dbName, function (err, db) {
        if(err) throw err;

        //Write databse Insert/Update/Query code here..
    });*/
}
function get(){
return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {connect, get, close};

