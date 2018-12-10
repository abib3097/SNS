const fs = require('fs');

//password hashing function
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

module.exports = {
    signUpPage: (req, res) => {
        res.render('sign-up.ejs', {
            title: "Welcome to SNS | Sign up"
            ,message: ''
        });
    },
	
    signUp: (req, res) => {
        if (!req.body.email) {
            return res.status(400).send("No Email");
        }
		var dateFormat = require('dateformat');
        let message = '';
        var email = req.body.email;
		let name = req.body.name;
		let address = req.body.address;
        let plaint_password = req.body.password;
		var hash_data=saltHashPassword(plaint_password);
		var password=hash_data.passwordHash;
		var salt=hash_data.salt;
        let emailQuery = "SELECT * FROM `publisher` WHERE email = '" + email + "'";
		var n=null;
		let now=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
        db.query(emailQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Email already exists';
                res.render('emailExists.ejs', {
                    message,
                    title: "Welcome to SNS | Sign up"
                });
            }
		else {

            
							let query = "INSERT INTO `publisher` (name, email, address, encrypted_password, salt, created_at, updated_at) VALUES ('" +
                            name + "', '" + email + "', '" + address + "', '" + password + "', '" + salt + "', '" + now + "', " + null + ")";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            return res.redirect('/');
							
							
                        });
						
                    };
                /* else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('sign-up.ejs', {
                        message,
                        title: "Welcome to Socka | Add a new player"
                    });
                }*/
            });
        }
};
    