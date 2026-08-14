# Secure MERN Backend API

## Description

This project is a structured Backend API built using Node.js and Express.

The API uses a temporary in-memory collection of movie data and includes:

* Express routing
* Controllers
* Input validation middleware
* Controlled CORS
* Helmet security middleware
* Central error handling
* Environment variables
* REST API endpoints

## Running the API

Navigate to the `api` folder and run:

```bash
node index.js
```

The server runs on:

`http://localhost:4000`

## API Endpoints Tested in Postman

### 1. Root Route

**GET**

`http://localhost:4000`

Used to check that the API is running.

### 2. Health Route

**GET**

`http://localhost:4000/health`

Used to check the server health.

### 3. Get All Movies

**GET**

`http://localhost:4000/api/movies`

Returns all movies currently stored in the temporary in-memory collection.

### 4. Get Movie by ID

**GET**

`http://localhost:4000/api/movies/m1`

Returns the movie with the specified ID.

### 5. Create a Movie

**POST**

`http://localhost:4000/api/movies`

Request body:

```json
{
    "title": "Interstellar",
    "director": "Christopher Nolan",
    "year": 2014,
    "genre": "Sci-Fi",
    "rating": 8.6
}
```

## Sample Movie Request Bodies

The following five movies were added using POST requests.

### Movie 1

```json
{
    "title": "Interstellar",
    "director": "Christopher Nolan",
    "year": 2014,
    "genre": "Sci-Fi",
    "rating": 8.6
}
```

### Movie 2

```json
{
    "title": "The Dark Knight",
    "director": "Christopher Nolan",
    "year": 2008,
    "genre": "Action",
    "rating": 9.0
}
```

### Movie 3

```json
{
    "title": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "year": 1994,
    "genre": "Crime",
    "rating": 8.9
}
```

### Movie 4

```json
{
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "year": 2001,
    "genre": "Animation",
    "rating": 8.6
}
```

### Movie 5

```json
{
    "title": "Parasite",
    "director": "Bong Joon-ho",
    "year": 2019,
    "genre": "Thriller",
    "rating": 8.5
}
```

## Input Validation Tests

### Missing Fields

```json
{
    "title": "Test Movie"
}
```

**Expected response:** `400 Bad Request`

### Incorrect Data Types

```json
{
    "title": "Test Movie",
    "director": "Test Director",
    "year": "2020",
    "genre": "Drama",
    "rating": "8.5"
}
```

**Expected response:** `400 Bad Request`

### Title Too Short

```json
{
    "title": "A",
    "director": "Test Director",
    "year": 2020,
    "genre": "Drama",
    "rating": 8
}
```

**Expected response:** `400 Bad Request`

### Invalid Year

```json
{
    "title": "Test Movie",
    "director": "Test Director",
    "year": 1800,
    "genre": "Drama",
    "rating": 8
}
```

**Expected response:** `400 Bad Request`

### Invalid Rating

```json
{
    "title": "Test Movie",
    "director": "Test Director",
    "year": 2020,
    "genre": "Drama",
    "rating": 15
}
```

**Expected response:** `400 Bad Request`

## Movie Attributes

Each movie contains the following attributes:

* `id`
* `title`
* `director`
* `year`
* `genre`
* `rating`

The movie data is stored temporarily in memory and is not persisted in a database.
