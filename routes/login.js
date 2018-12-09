const fs = require('fs');
		
module.exports = {
    logInPage: (req, res) => {
        res.render('login.ejs', {
            title: "Welcome to SNS | Sign up"
            ,message: ''
        });
    },
	
    logIn: (req, res) => {


        let message = '';
       let email = req.body.email;
        let password = req.body.password;
module.exports.email = email;
//module.exports={email};
        let emailQuery = "SELECT * FROM `publisher` WHERE email = '" + email + "'";

        db.query(emailQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length <= 0) {
                message = 'Email does not exist';
                res.render('sign-up.ejs', {
                    message,
                    title: "Welcome to SNS | Sign up"
                });
            }
		else {
let passwordQuery = "SELECT * FROM `publisher` WHERE password = '" + password + "'";

        db.query(passwordQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
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
            });
        }
		});
	}
}