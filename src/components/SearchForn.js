import { useState } from "react";

function SearchForm(props){

    const [enteredTitle, setEntererdTitle] = useState("");
    const [enteredGenre, setEntererdGenre] = useState("");
    const [enteredRating, setEntererdRating] = useState("");

   
    const titleChangeHandler = (event) => {
        setEntererdTitle(event.target.value);
    }

    const genreChangeHandler = (event) => {
        setEntererdGenre(event.target.value);
    }

    const ratingChangeHandler = (event) => {
        setEntererdRating(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const searchData = {
            //id: enteredId,
            title: enteredTitle,
            genre: enteredGenre,
            rating: enteredRating
        }
       props.onClickSearchDataHandler(searchData);
    }
    return(
        <form onSubmit={submitHandler}>
            <div>            
                <div>
                    <label>Title &nbsp; &nbsp; &nbsp;</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Genre &nbsp; &nbsp;</label>
                    <input type="text" onChange={genreChangeHandler}  />
                </div>
                <div>
                    <label>Rating &nbsp; &nbsp;</label>
                    <input type="text"  onChange={ratingChangeHandler}  />
                </div>
                <div>                    
                    <button type='submit'>Search</button>
                </div>
            </div>
            <div></div>

        </form>
        
    );

}

export default SearchForm;

/*
import { useState } from "react";

function ExpenseForm(props){

    
    const [enteredTitle, setEntererdTitle] = useState("");
    const [enteredGenre, setEntererdGenre] = useState("");
    const [enteredRating, setEntererdRating] = useState("");

   
    const titleChangeHandler = (event) => {
        setEntererdTitle(event.target.value);
    }

    const genreChangeHandler = (event) => {
        setEntererdGenre(event.target.value);
    }

    const ratingChangeHandler = (event) => {
        setEntererdRating(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id: enteredId,
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
       props.onSaveExpenseDataHandler(expenseData);
      //  console.log(expenseData);
      //  console.log(props);
    }

    return(

        <form onSubmit={submitHandler}>
            <div>            
                <div>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text" onChange={genreChangeHandler}  />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="text"  onChange={ratingChangeHandler}  />
                </div>
                <div>                    
                    <button type='submit'>Search</button>
                </div>
            </div>
            <div></div>

        </form>
        
    );

}




*/