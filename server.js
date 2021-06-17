const express = require('express');
const rounter=express()
// const path=`${_dirname}/sample1.json`
const port = process.env.PORT || 27017;
const server = rounter.listen(port);
let person = {firstName:"ABDULLAH", lastName:"Doe", age:50, eyeColor:"blue"};
const mongoose=require('mongoose')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

let conn = mongoose.connect('mongodb://localhost:27017/',{useNewUrlParser:true,useUnifiedTopology: true}) // returns a Promise
rounter.get('/api/test1', function(req, res) {
    conn.then(
        client=> client.db('mydb').collection('customers').find({}).toArray(function(err, docs) {
        if(err) { console.error(err) }
        res.send(JSON.stringify(docs))
    }))
    conn.catch(onerror)(()=>{
        console.log(onerror)})
})
rounter.use(express.json());


rounter.post('/api/endpoint3',async (req, res) => {
    try{
        MongoClient.connect(url, { useUnifiedTopology: true},function(err, db) {
            try{
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = req.body;
            dbo.collection("customers").insertOne(myobj, function(err, res) {
                console.log("1 document inserted");
            });
            res.send(JSON.stringify({message:"record is inserted"}));
            res.end()
            }catch (e) {
                res.send(JSON.stringify({message:"Something went wrong"}));
                res.end()
            }
        });
    }catch (e) {
        res.send(JSON.stringify({message:"Something went wrong"}));
        res.end()
    }
})
rounter.post('/api/endpoint3',async (req, res) => {
    try{
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj = [
                { name: 'John', address: 'Highway 71'},
                { name: 'Peter', address: 'Lowstreet 4'},
                { name: 'Amy', address: 'Apple st 652'},
                { name: 'Hannah', address: 'Mountain 21'},
                { name: 'Michael', address: 'Valley 345'},
                { name: 'Sandy', address: 'Ocean blvd 2'},
                { name: 'Betty', address: 'Green Grass 1'},
                { name: 'Richard', address: 'Sky st 331'},
                { name: 'Susan', address: 'One way 98'},
                { name: 'Vicky', address: 'Yellow Garden 2'},
                { name: 'Ben', address: 'Park Lane 38'},
                { name: 'William', address: 'Central st 954'},
                { name: 'Chuck', address: 'Main Road 989'},
                { name: 'Viola', address: 'Sideway 1633'}
            ];
            dbo.collection("customers").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });
        });
    }catch (e) {

    }
})


function condition(n){
    console.log(n%2);
}

