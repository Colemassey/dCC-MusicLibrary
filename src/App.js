import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import DisplayAllMusic from "./Components/DisplayAllMusic/DisplayAllMusic";
import SearchBar from "./Components/Searchbar/SearchBar";

//  To Do: Searchbar, scroll bar for display table, way to select a song and display the song in new component, add background image.





function App() {

  const [musicLibrary, setMusicLibrary] = useState([]);

  useEffect(() => {
    getAllMusicLibrary();

  }, [])
  async function getAllMusicLibrary() {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setMusicLibrary(response.data);

  }

  function searchFilter(search) {
    console.log(search)
    let musicList = musicLibrary.filter((result) => {
      return (result.title?.includes(search) || result.artist?.includes(search) || result.album?.includes(search) || result.genre?.includes(search) || result.releaseDate?.includes(search))
    })
    setMusicLibrary(musicList);
  }

  console.log(musicLibrary);
  return (
    <div className="App">
      <div>
        <SearchBar searchProperty={searchFilter} />
      </div>
      <div>
        <div class="parent">
          <div className="border-box">
            <DisplayAllMusic musicLibrary={musicLibrary} />
          </div>
          <div className="main-container" />
        </div>
      </div>
    </div>
  );
}

export default App;