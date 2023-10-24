import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

export default function App() {

  //http://www.omdbapi.com/?i=tt3896198&apikey=fc73afe7
  //http://www.omdbapi.com/?i=tt3896198&apikey=ef9e4d4e

  //proxy server
  //https://omdb-proxy-server.onrender.com

  const API_URL = `https://omdb-proxy-server.onrender.com/api/v1/movie/`;
  // State variables to store the search term and results
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}${title}`);
    const data = await response.json();
    setMovies(data.Search);

  }

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