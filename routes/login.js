const fs = require('fs');
var crypto = require('crypto');
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
module.exports = {
    logInPage: (req, res) => {
        res.render('login.ejs', {
            title: "Welcome to SNS | Sign up"
            ,message: ''
        });
    },
	
    logIn: (req, res) => {

		var salt;
		 var hashed_password;
        var encrypted_password;
        let message = '';
        let email = req.body.email;
        let password = req.body.password;
		module.exports.email = email;
        let emailQuery = "SELECT * FROM `publisher` WHERE email = '" + email + "'";
		

		db.query("Select * From publisher where email = ?",[email],function(err,result,fields){
            if(result && result.length){
                 salt = result[0].salt;
                encrypted_password = result[0].encrypted_password;

                //Hash password from login request
                 hashed_password = checkHashPassword(password,salt).passwordHash;
                
              
            }
			if (result.length <= 0) {
                message = 'Email does not exist';
                res.render('sign-up.ejs', {
                    message,
                    title: "Welcome to SNS | Sign up"
                });
            }
          
	   });
  
  
  

            
		
/*let passwordQuery = "SELECT * FROM `publisher` WHERE password = '" + password + "' and email = '" + email + "'";

        db.query(passwordQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }*/
            if (encrypted_password == hashed_password) {
                message = 'OK';
				
				
				let query = "SELECT * FROM `category`  "; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('login.ejs');

			
            }

            res.render('category.ejs', {
                title: "Welcome to Socka | View Players"
                ,category: result
				
            });
        });
		
		
		
		
		/*
                res.render('category.ejs', {
                    message,
                    title: "Welcome to SNS | Sign up"
                });*/
            }
			else{
				res.render('login.ejs', {
                    message,
                    title: "Welcome to SNS | Sign up"
                });
            
							
                        };
						
                  
                /* else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('sign-up.ejs', {
                        message,
                        title: "Welcome to Socka | Add a new player"
                    });
                }*/
            }
        }
		
	
