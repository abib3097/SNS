const fs = require('fs');     

	let category;
module.exports = {
	


    write: (req, res) => {
//let category = req.params.name;
        console.log(category);
var dateFormat = require('dateformat');
var login=require('./login')
 
		let email=login.email;
        let message = '';
		let mes=req.body.mes;
		let duration=req.body.duration;
		let lat=req.body.lat;
		let lon=req.body.lon;
		let now=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
		let yes=1;
		let n='null';
		  let uploadedFile;
        let image_name;
        let fileExtension;
		 if (req.files.img) {
         uploadedFile = req.files.img;
         image_name = uploadedFile.name;
         fileExtension = uploadedFile.mimetype.split('/')[1];
        }
		

 

   

            if(!req.files.img){
							let query = "INSERT INTO `messages` (pemail, category, stime, duration, stat, lat, lon, message, image) VALUES ('" +
                            email + "', '" + category + "', '" + now + "', '" + duration + "', '" + yes + "','"+  
							 lat + "', '" + lon + "', '" + mes + "', '" + n + "')";
							
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }

                            return res.redirect('/');
							
							
                        });
			}
			else{
				 uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
				let query = "INSERT INTO `messages` (pemail, category, stime, duration, stat, lat, lon, message, image) VALUES ('" +
                            email + "', '" + category + "', '" + now + "', '" + duration + "', '" + yes + "','"+
							  lat + "', '" + lon + "', '" + mes + "', '" + image_name  + "')";
							
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }

                            return res.redirect('/');
							
							
                        });
			});
			}
                    
                /* else {
                    message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                    res.render('sign-up.ejs', {
                        message,
                        title: "Welcome to Socka | Add a new player"
                    });
                }*/
						
						
        },
		getCategoryPage: (req, res) => {
        let query = "SELECT * FROM `category` order by name asc"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('write.ejs');
				console.log('1');
			
            }
			console.log('1');
            res.render('category.ejs', {
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
	categoryPage: (req, res) => {console.log('3');
        res.render('category.ejs', {
            title: "Welcome to SNS | Sign up"
            ,message: ''
        });
    }

};
    