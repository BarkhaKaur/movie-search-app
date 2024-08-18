import Movie from './Movie.js'
function Movies(props){

return( 
    
    <div>
       
    { 
        props.movies.map((movie) => (
       <div>  
         <Movie   key = {movie.key} 
               title = {movie.title}
               genre = {movie.genre}
               rating = {movie.rating} />
        </div>
         )
         )
    }

    </div>

);

}

export default Movies;