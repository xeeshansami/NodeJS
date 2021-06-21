var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const express = require('express');
const rounter=express()
const port = process.env.PORT || 3000;
const server = rounter.listen(port);
const mongoose=require('mongoose')
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Abdullah", address: "Highway 37" ,phone:"0341230258"};
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});


rounter.post('/api/endpoint3',async (req, res) => {
    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = { name: req.body.user, address:req.body.password ,phone:"0341230258"};
            dbo.collection("customers").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
            res.send(JSON.stringify({message:"record is inserted"}));
            res.end()
        });


    }catch (e) {

    }
})
