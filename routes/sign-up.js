const fs = require('fs');

module.exports = {
    signUpPage: (req, res) => {
        res.render('sign-up.ejs', {
            title: "Welcome to SNS | Sign up"
            ,message: ''
        });
    },
	
    signUp: (req, res) => {
        if (!req.body.email) {
            return res.status(400).send("No files were uploaded.");
        }

        let message = '';
        var email = req.body.email;
		let name = req.body.name;
        let password = req.body.password;

        let emailQuery = "SELECT * FROM `publisher` WHERE email = '" + email + "'";

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

            
							let query = "INSERT INTO `publisher` (email, name, password) VALUES ('" +
                            email + "', '" + name + "', '" + password + "')";
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
    