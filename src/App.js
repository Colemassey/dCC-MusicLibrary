import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import DisplayAllMusic from "./Components/DisplayAllMusic/DisplayAllMusic";
import SearchBar from "./Components/Searchbar/SearchBar";
import DisplaySingleSong from "./Components/DisplaySingleSong/DisplaySingleSong";

//  To Do: Searchbar, scroll bar for display table, way to select a song and display the song in new component, add background image.





function App() {

  const [musicLibrary, setMusicLibrary] = useState([]);
  const [singleSongDisplay, setSingleSongDisplay] = useState({});

  useEffect(() => {
    getAllMusicLibrary();

  }, [])
  async function getAllMusicLibrary() {
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setMusicLibrary(response.data);

  }

  function searchFilter(search) {
    // console.log(search)
    let musicList = musicLibrary.filter((result) => {
      return (result.title?.includes(search) || result.artist?.includes(search) || result.album?.includes(search) || result.genre?.includes(search) || result.release_date?.includes(search))
    })
    setMusicLibrary(musicList);
  }

  function selectFilter(pk) {
    console.log(singleSong)
    let singleSong = musicLibrary.filter((result) => {
      return (result.title?.includes(pk) || result.artist?.includes(pk) || result.album?.includes(pk) || result.genre?.includes(pk) || result.release_date?.includes(pk))
    })
    setSingleSong(singleSong);
  }


  // console.log(musicLibrary);
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
          <div>
            <DisplaySingleSong selectProperty={selectFilter} />
          </div>
          <div className="main-container" />
        </div>
      </div>
    </div>
  );
}

export default App;