import React, { useState, useEffect } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

    const [filteredMusic, setFilteredMusic] = useState(props.musicLibrary)

    const [search, setSearch] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        props.searchProperty(search)
        setSearch('')
    }

    useEffect(() => {
        setFilteredMusic(props.musicLibrary)
    }, [props.musicLibrary])

    async function handleAdd(requestBody) {
        const response = await axios.put(`http://127.0.0.1:8000/music/`, requestBody).then((response)=> response).catch((error)=> console.log(error));  
        props.updateMusicLibrary(response) 
      };
    
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