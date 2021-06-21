const express = require('express');
const router=express()
const port = process.env.PORT || 27017;
let url = "mongodb://localhost:27017/";
let db = require('./db');
router.use(express.json());
router.listen(port);
db.connect((err) => {
    console.log('aof db connected , server running on port: ' + port)
    console.log("Error "+err)
});
router.post("/api/endpoint4",  function(req, res) {
    try {
        db.get().collection("customers", function (err, data) {
            var mysort = {name: -1}
            data.find({name: req.body.name}).limit(230).sort(mysort).toArray(function (err, data) {
                res.json(data);
            })
        });
    }catch (err){
        res.json({error:err});
    }
});
function condition(n){
    console.log(n%2);
}

