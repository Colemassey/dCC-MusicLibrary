import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import DisplayAllMusic from "./Components/DisplayAllMusic/DisplayAllMusic";
import SearchBar from "./Components/Searchbar/SearchBar";
// import DisplaySingleSong from "./Components/DisplaySingleSong/DisplaySingleSong";

//  To Do: Searchbar, scroll bar for display table, way to select a song and display the song in new component, add background image.





function App() {

  const [musicLibrary, setMusicLibrary] = useState([]);
  // const [singleSongDisplay, setSingleSongDisplay] = useState({});

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


  function updateMusicLibrary(updatedSong) {
    if (updatedSong?.id) {
      const musicLibraryCopy = [...musicLibrary]
      const songIndex = musicLibraryCopy.findIndex(song=>song.id=updatedSong.id)
      if (songIndex){
        musicLibraryCopy.splice(songIndex, 1, updatedSong);
      
      }
    }
    getAllMusicLibrary();
  }

  


  // function selectFilter(single) {
  //   console.log(singleSong)
  //   let singleSong = song.filter((result) => {
  //     return (result.id.includes(single))
  //   })
  //   setSingleSong(singleSong);
  // }

  // console.log(musicLibrary);
  return (
    <div className="App">
      <div>
        <SearchBar searchProperty={searchFilter} />
      </div>
      <div className= 'main-wrapper'>
        <div class="parent">
          <div className="border-box">
            <DisplayAllMusic musicLibrary={musicLibrary} updateMusicLibrary={updateMusicLibrary} />
          </div>
          {/* <div className="parent-2">
          <div className="border-box-2">
            <DisplaySingleSong selectProperty={selectFilter} />
          </div>
          </div> */}
          <div className="main-container" />
        </div>
      </div>
    </div>
  );
}

export default App;