import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import View from './components/View';
import MovieView from './components/MovieView';
import { useState } from 'react';
import Popular from './components/Popular';
import SearchedPage from './components/SearchedPage';

function App() {
  let[movies, setMovies] = useState([]);
  let [searching, setSearching] = useState([])
  let [movie, setMovie] = useState("");
  console.log(
    searching
  )
  return (

    <div className="App">
      <Popular
      movies = {movies}
      setMovies={setMovies}
      />
      <Routes>
        <Route path='/' element={<Home
        movie={movie}
        setMovie={setMovie}
        movies={movies}
        searching={searching}
        setSearching={setSearching}
  
        />}/>
        <Route path='/:name/:id' element={<View/>}/>
        <Route path='/selectedMovie/:id' element={<MovieView
        movies={movies}
        />}/>
        <Route path='/search-movie/:id' element={<SearchedPage
        searching={searching}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
