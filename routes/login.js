var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;

/* GET home page. */
router.post('/', function(req, res, next) {
    let Username=req.body.uname
    let Password=req.body.pwd

    console.log(Username)

let url='mongodb://localhost:27017';

mongoClient.connect(url,function (err,client) {
    if (err){
        console.log('database connection error:'+ err);
    } else {
        let myDB=client.db('mysample');

        if (myDB){
            console.log('connected');

            myDB.collection('person').findOne({username:Username,password:Password},function (err,result){
                    if (err){
                        console.log('error')
                    } else{
                        if (result) {
                            console.log('login successful')
                        }else{
                            console.log('login failed')
                        }
                        }
                    })
                    }
                }


        })


    });
module.exports = router;