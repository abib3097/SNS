const fs = require('fs');     
    var express = require('express')

	let category;
module.exports = {
	


    write: (req, res) => {
//let category = req.params.name;
        console.log(category);
var dateFormat = require('dateformat');
var login=require('./login')
console.log(login.email);
		let email=login.email;
        let message = '';
		let mes=req.body.mes;
		
		
		let duration=req.body.duration;
		let lat=req.body.lat;
		let lon=req.body.lon;
		let now=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
		/*let now=new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '') ;*/
		let yes=1;
		
		console.log(email);
 

   

            
							let query = "INSERT INTO `messages` (pemail, category, stime, duration, stat, lat, lon, message) VALUES ('" +
                            email + "', '" + category + "', '" + now + "', '" + duration + "', '" + yes + "', '" + lat + "', '" + lon + "', '" + mes + "')";
							
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }

                            return res.redirect('/');
							
							
                        });
						
                    
                /* else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('sign-up.ejs', {
                        message,
                        title: "Welcome to Socka | Add a new player"
                    });
                }*/
						
						
        },
		getCategoryPage: (req, res) => {
        let query = "SELECT * FROM `category` "; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('write.ejs');
				console.log('1');
			
            }
			console.log('1');
            res.render('categoty.ejs', {
                title: "Welcome to Socka | View Players"
                ,category: result
				
            });
        });
    },
    writePage: (req, res) => {
		category = req.params.name;
        console.log('1');
		console.log(category);
		console.log('1');
        res.render('write.ejs', {
            title: "Welcome to SNS | Sign up"
            ,message: ''
        });
    },
	categoryPage: (req, res) => {
        res.render('category.ejs', {
            title: "Welcome to SNS | Sign up"
            ,message: ''
        });
    }

};
    