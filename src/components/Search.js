import SearchForm from "./SearchForn";
function Search(props){
    const saveSearchDataHandler = (enteredSearchData) =>{
        console.log("In Search");
        console.log(enteredSearchData);
        props.onSearchAdded(enteredSearchData);
    }
    return(
        <div>
            <SearchForm onClickSearchDataHandler={saveSearchDataHandler}/>
        </div>
    );
}
export default Search;

/*
const saveSearchDataHandler = (enteredSearchData) =>{
        console.log("In Search");
        console.log(enteredSearchData);
        props.onExpenseAdded(enteredSearchData);
    }
    return(
        <div>
            <ExpenseForm onSaveSearchDataHandler={saveSearchDataHandler}/>
        </div>
    );

*/