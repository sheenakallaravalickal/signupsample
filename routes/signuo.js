var express = require('express');
var router = express.Router();
let mongoClient=require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('output');
});

router.post('/',function (req,res) {
    let Name=req.body.name
    let Username=req.body.uname
    let Email=req.body.email
    let Mob=req.body.mob
    let Password=req.body.pwd

    console.log(Name)

    let url='mongodb://localhost:27017';

    mongoClient.connect(url,function (err,client) {
        if (err){
           console.log('database connection error:'+ err);
        } else {
            let myDB=client.db('mysample');

            if (myDB){
                console.log('connected');

                myDB.collection('person').insertOne({name:Name,username:Username,email:Email,mobile:Mob,password:Password},function (err,result){
                    if (err){
                        console.log('error'+err)
                    } else{
                        console.log('successfully inserted' +result)
                        res.redirect('/')
                    }
                }

                )
            }
        }
    })

})
module.exports=router;