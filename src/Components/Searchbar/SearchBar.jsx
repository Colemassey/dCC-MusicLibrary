import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    const [search, setSearch] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newSearch = {
            search: search
        };
        props.newSearchProperty(newSearch)
        setSearch('')
    }

    return ( 
        <div class="topnav">
            <a class="active" href="#home">OrangeAUDIO</a>
                <div class="search-container">
                    <form onSubmit={handleSubmit} action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"></input>
                    </form>
                </div>
        </div>
     );
}
 
export default SearchBar;