const fs = require('fs');
require('./login');
module.exports = {
    addCategoryPage: (req, res) => {console.log('here2');
        res.render('addCategory.ejs', {
            title: "Welcome to SNS | Add Category"
            ,message: ''
        });
    },
	
    addCategory: (req, res) => {
console.log('here12');
        let message = '';
        var cat = req.body.cat;
		var top = req.body.top;
		

        let catQuery = "SELECT * FROM `category` WHERE name = '" + cat + "'";

        db.query(catQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Category already exists';
                res.render('catExists.ejs', {
                    message,
                    title: "Welcome to SNS | Sign up"
                });
            }
		else {

            
							let query = "INSERT INTO `category` (name, top) VALUES ('" +
                            cat + "', '" + top + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
							
								let query = "SELECT * FROM `category` group by name order by name asc  "; // query database to get all the players

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
				
							console.log('here1');
                        //     return res.redirect('category`.ejs');
							console.log('2');
							
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
    