import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

export default function App() {

  //http://www.omdbapi.com/?i=tt3896198&apikey=fc73afe7
  //http://www.omdbapi.com/?i=tt3896198&apikey=ef9e4d4e

  const API_URL = `http://www.omdbapi.com/?apikey=fc73afe7&s=`;
  // State variables to store the search term and results
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //test Data 
  const movie1 = {
    "Title": "Spiderman and Grandma",
    "Year": "2009",
    "imdbID": "tt1433184",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
  }

  const movie2 = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
  }

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);

  }

  //useEffect(() => {searchMovies('Spiderman')}, [])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text"
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon}
          alt="search"
          onClick={() => {
            if (!searchTerm) {
              return
            } else {
              searchMovies(searchTerm)
            }
          }} />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} key={crypto.randomUUID()}/>
                ))
              }

            </div>
          ) : (
            <div className="empty">
              <h2>No movies found!</h2>
            </div>
          )
      }

    </div>
  )
}