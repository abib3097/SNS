/*
RESTFul services by Node JS
Author: Abib Cortes

*/

var crypto = require('crypto');
//var uuid = require('uuid');
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');


//mySQL connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "q1w2e3r4!",
    database: "SNS"
});

//password
var crypto = require('crypto');
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
    .toString('hex')//converts to hexadecimal format
    .slice(0,length)//returns required number of characters;
};
var sha512 = function(password,salt){
    var hash = crypto.createHmac('sha512',salt);

    hash.update(String(password));
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

function saltHashPassword(userPassword){
    var salt = genRandomString(16);
    var passwordData = sha512(userPassword,salt);
    return passwordData;
};

function checkHashPassword(userPassword,salt){
    var passwordData = sha512(userPassword,salt);
    return passwordData;
};

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post('/register/',(req,res,next) => {
    var post_data = req.body;
    //var uid = uuid.v4();
    

    var name = post_data.name;
    var email = post_data.email;
    var address = post_data.address;
    var plaint_password = post_data.password;
    var hash_data = saltHashPassword(plaint_password);
    var password = hash_data.passwordHash;
    var salt = hash_data.salt;
    var lat = post_data.lat;
    var lon = post_data.lon;
    //get position
    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //         console.log("Lat: " + position.coords.latitude +"\nLon: "+position.coords.longitude);
    //     } else { 
    //         console.log("Position not found");
    //     }
    // }
    
    //con.connect(function(err){
        //if(err) throw err;
    
        con.query('SELECT * from readers where email =?',[email],function(err,result,fields){
            con.on('error',function(err){
            console.log('[MySQL ERROR]',err);
        });
        if (result && result.length) {
            result[0].email = "alreadyInserted";
            res.send(JSON.stringify(result[0]));
        }
        
        else {
            //const reader = { unique_id:uid,name: name, email:email,address:address,encrypted_password:password,salt:salt,lat:lat,lon:lon,created_at:Date.now(),updated_at:null};
            con.query("INSERT INTO readers(name,email,address,encrypted_password,salt,lat,lon,created_at,updated_at) VALUES(?,?,?,?,?,?,?,NOW(),NULL)",
            [name,email,address,password,salt,lat,lon],
            //con.query('Insert into readers SET ?',reader,
                function(err,result,fields){
                    if (err) throw err;
                    res.send(JSON.stringify(result[0]));
                });
            
                
                
                
            }
        });
    //})
                                 
});


app.post('/login/',(req,res,next) => {
    var post_data = req.body;

    var user_password = post_data.password;
    var email = post_data.email;

    //con.connect(function(err){
        //if(err) throw err;
        con.query("Select * From readers where email = ?",[email],function(err,result,fields){
            if(result && result.length){
                var salt = result[0].salt;
                var encrypted_password = result[0].encrypted_password;

                //Hash password from login request
                var hashed_password = checkHashPassword(user_password,salt).passwordHash;
                
                if(encrypted_password == hashed_password){
                    
                    res.send(JSON.stringify(result[0]));
                    
                }
                else{
                    result[0].encrypted_password = "wrongPass";
                    res.send(JSON.stringify(result[0]));
                }
            }
            else {
                res.send("{name:'none',email:'none',encrypted_password:'none',salt:'none',lat:'none',lon:'none'}");
            }
        });
    //})
    
});

// app.get("/", (req,res,next)=> {
//     console.log('Password:123456');
//     var encrypt = saltHashPassword("123456");
//     console.log('Encrypt: '+ encrypt.passwordHash);
//     console.log('Salt: '+ encrypt.salt);
// }); 

app.get('/messages/',(req,res,next) => {
    con.query("SELECT * FROM SNS.messages",function(err,result,fields){
        res.send(JSON.stringify(result));

    });


});


//start server

app.listen(80,()=> {
    console.log('SNS running on port 80');

});
