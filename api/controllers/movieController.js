const movies = [
    {
        id: 'm1',
        title: 'The Matrix',
        director: 'The Wachowskis',
        year: 1999,
        genre: 'Sci-Fi',
        rating: 8.7
    },
    {
        id: 'm2',
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Sci-Fi',
        rating: 8.8
    }
];

const getAllMovies = (req, res) => {
    const safeMovies = movies.map(({ id, title, director, year, genre, rating }) => ({
        id,
        title,
        director,
        year,
        genre,
        rating
    }));

    res.status(200).json({
        count: safeMovies.length,
        data: safeMovies
    });
};

const getMovieById = (req, res) => {
    const { id } = req.params;

    if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
        return res.status(400).json({
            error: 'Invalid movie ID format'
        });
    }

    const movie = movies.find((item) => item.id === id);

    if (!movie) {
        return res.status(404).json({
            error: 'Movie not found'
        });
    }

    res.status(200).json({ data: movie });
};

const createMovie = (req, res) => {
    const { title, director, year, genre, rating } = req.body;

    const newMovie = {
        id: `m${movies.length + 1}`,
        title,
        director,
        year,
        genre,
        rating
    };

    movies.push(newMovie);

    res.status(201).json({
        message: 'Movie created',
        data: newMovie
    });
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie
};