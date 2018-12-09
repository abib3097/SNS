module.exports = {
    getCategoryPage: (req, res) => {
        let query = "SELECT * FROM `category` "; // query database to get all the players

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
    },
};
