const router = require('express').Router();
const Movies = require('../models/Movie.model');

// C(R)UD -> Retrieve all the information
router.get("/", async (req, res) => {
	try {

		const movies = await Movies.find();
		console.log("hello I have loaded:", movies)
		res.render('movies', { movies });
	} catch (error) {
		console.error(error);
	}
});



module.exports = router;