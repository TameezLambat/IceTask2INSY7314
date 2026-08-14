const validateMovieInput = (req, res, next) => {
    const { title, director, year, genre, rating } = req.body;

    if (!title || !director || !year || !genre || rating === undefined) {
        return res.status(400).json({
            error: 'All fields are required'
        });
    }

    if (
        typeof title !== 'string' ||
        typeof director !== 'string' ||
        typeof genre !== 'string'
    ) {
        return res.status(400).json({
            error: 'Title, director, and genre must be text values'
        });
    }

    if (
        typeof year !== 'number' ||
        typeof rating !== 'number'
    ) {
        return res.status(400).json({
            error: 'Year and rating must be numbers'
        });
    }

    const trimmedTitle = title.trim();
    const trimmedDirector = director.trim();
    const trimmedGenre = genre.trim();

    if (trimmedTitle.length < 2 || trimmedTitle.length > 100) {
        return res.status(400).json({
            error: 'Title must be between 2 and 100 characters'
        });
    }

    if (trimmedDirector.length < 2 || trimmedDirector.length > 100) {
        return res.status(400).json({
            error: 'Director must be between 2 and 100 characters'
        });
    }

    if (trimmedGenre.length < 2 || trimmedGenre.length > 50) {
        return res.status(400).json({
            error: 'Genre must be between 2 and 50 characters'
        });
    }

    if (year < 1888 || year > new Date().getFullYear()) {
        return res.status(400).json({
            error: 'Year must be a valid movie release year'
        });
    }

    if (rating < 0 || rating > 10) {
        return res.status(400).json({
            error: 'Rating must be between 0 and 10'
        });
    }

    req.body = {
        title: trimmedTitle,
        director: trimmedDirector,
        year,
        genre: trimmedGenre,
        rating
    };

    next();
};

module.exports = validateMovieInput;