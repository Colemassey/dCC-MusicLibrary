import React, { useState, useEffect } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    const [filteredMusic, setFilteredMusic] = useState(props.musicLibrary)

    const [search, setSearch] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newSearch = {
            search: search
        };
        props.newSearchProperty(newSearch)
        setSearch('')
    }

    useEffect(() => {
        setFilteredMusic(props.musicLibrary)
    }, [props.musicLibrary])


    
    return ( 
        <div className="topnav">
            <a className="active" href="#home"><big>Orange</big><small className='audio'>AUDIO</small></a>
                <div className="search-container" className='search'>
                    <form onSubmit={handleSubmit} action="/action_page.php">
                        <input type="text"
                        placeholder="Search.."
                        name="search"
                        value={search}
                        onChange={(event) => setSearch((event.target.value))}
                        ></input>
                        <button type="submit">Search</button>
                    </form>
                </div>
        </div>
    );
}
 
export default SearchBar;