import React, { useState } from 'react';
import './App.css';
import AddMovieForm from './components/Formulaire';
import MovieCard from './components/MovieCard';
import { movies } from './constants/movies';


function App() {
  const [movieList, setMovieList] = useState(movies)

const addMovie = (movie) => {
setMovieList([...movieList  , movie])
}

  console.log("movie List", movieList)

  return (
    <div className="App">
      <AddMovieForm  addMovie={addMovie} />
      {
        movieList.map(movie => <MovieCard movie={movie} />)

      }

    </div>
  );
}

export default App;
