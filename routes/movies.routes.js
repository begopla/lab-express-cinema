const router = require('express').Router();
const Movies = require('../models/Movie.model');

// C(R)UD -> Retrieve all the information
router.get("/", async (req, res) => {
	try {

		const moviesData = await Movies.find();
		console.log("hello I have loaded:", moviesData)
		res.render('movies', { moviesData });
	} catch (error) {
		console.error(error);
	}
});



module.exports = router;