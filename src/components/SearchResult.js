import Movie from "./Movie";

function SearchResult(props){
    const searchedMovies = props.movies.filter((movie)=>{
      
        return movie.title.includes(props.moviesToSearch.title) 
        && movie.genre.includes(props.moviesToSearch.genre)
            && movie.rating.includes(props.moviesToSearch.rating) ;
        
    })

    
    return(
        <div>
       
         { 
           searchedMovies.map((movie) => (
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

export default SearchResult