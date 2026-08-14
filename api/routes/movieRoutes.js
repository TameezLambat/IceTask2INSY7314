const express = require('express');
const router = express.Router();

const {
    getAllMovies,
    getMovieById,
    createMovie
} = require('../controllers/movieController');

const validateMovieInput =
    require('../middleware/validateMovieInput');

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', validateMovieInput, createMovie);

module.exports = router;