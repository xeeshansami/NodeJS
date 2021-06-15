const { text } = require('express');
const express = require('express');
const rounter = express();
const port = process.env.PORT || 27017;
const server = rounter.listen(port);
var url = "mongodb://localhost:27017/";

// const str={array:[{username:"zeeshansami",password:"Admin123"}]}
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

rounter.use(express.json());
server.timeout = 1000 * 60 * 10; // 10 minutes
rounter.post('/api/endpoint1',async (req, res) => {
    try{
        var user_name = req.body.user;
        var password = req.body.password;
        console.log(loo()+"User name = "+user_name+", password is "+password);
        // res.json(person)
        res.end("yes");
    }catch(err){
        console.log("Exceptions: "+err);
        res.json({error:"Something went wrong"});
        res.end()
    }
})

rounter.post('/', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("users");
        dbo.collection("customers").insertOne({
            name: req.body.name,
            age: req.body.age
        }, 
        function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
});
function loo(){
const d=new Date()
console.log(d);
}
rounter.get('/api/endpoint2', (req, res) => {
    // Set Content-Type differently for this particular API
    console.log(req.body)``;
    loo()
    
    res.set({'Content-Type': 'application/xml'});
    res.send(`<note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
        </note>`);
})





