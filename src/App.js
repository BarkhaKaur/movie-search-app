
import './App.css';
import SearchForm from './components/SearchForn.js';
import Search from './components/Search.js';
import Movies from './components/Movies.js'
import SearchResult from './components/SearchResult.js';
import { useState } from 'react';
function App() {

  const movies = [
    {key:'m1', title:'Inception' , genre:'Action', rating:'5 stars'},
    {key:'m2', title:'Toy Story' , genre:'Comedy', rating:'4.5 stars'},
    {key:'m3', title:'Blade Runner' , genre:'Action', rating:'4 stars'},
  ];

  const [searchForMovie,setSearchedForMovie ]= useState("");
 
  //const [searchedMovies, setSearchedMovies] = useState[""]
  const searchedMoviesHandler = (movie) =>{
    console.log("In App");
    console.log(movie);
    setSearchedForMovie(movie);
    //setSearchedMovies(movie); //searchedForMovies={searchedMovies}
  }

  //const searchForMovie ={title:"",genre:"",rating:""};
 
  const setSearchedMovies = (movie) =>{
    console.log("In App setSearchedMovies");
    console.log(movie);
  }
  return ( 
    <div >
      <h1>Search a Movie</h1>
      <Search onSearchAdded={searchedMoviesHandler}/>
      <br/><br/><br/>
          <h2>Searched Movies</h2>
          <SearchResult moviesToSearch={searchForMovie}  movies={movies} /> 
      <br/><br/><br/>
         <h2>All Movies</h2>
        <Movies movies={movies}/>
      
    </div>
   

  );
}

export default App;
