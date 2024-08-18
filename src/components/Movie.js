


function Movie(props){
    
    // Movie has an id , genre, title and rating
    return(
        <div >
        <div >
            <h4>{props.title}</h4>
            <span>  {props.genre}  </span>
            <span>" {props.rating} "</span>
            <hr />
        </div>

        </div>
    );
}

export default Movie;