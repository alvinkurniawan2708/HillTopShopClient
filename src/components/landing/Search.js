import React from 'react';


const Search = () =>{
    return (
        <form action="" id="search-form">
        <input type="search" name="" id="search-box" placeholder="Searc item here"></input>
        <label for="search-box" className="fas fa-search"></label>
        <i className="fas fa-times" id="close"></i>
        </form>
    );
};

export default Search;