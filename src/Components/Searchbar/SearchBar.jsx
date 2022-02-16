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
        <div className="topnav">
            <a className="active" href="#home"><big>Orange</big><small className='audio'>AUDIO</small></a>
                <div className="search-container">
                    <form onSubmit={handleSubmit} action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"></input>
                    </form>
                </div>
        </div>
     );
}
 
export default SearchBar;