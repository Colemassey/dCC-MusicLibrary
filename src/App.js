import {useState, useEffect} from "react";
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
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setMusicLibrary(response.data);

  }
  
  function searchFilter(search) {
    console.log(search)
    let musicList = musicLibrary.filter((result) => {
        if (result.title.includes(search) || result.artist.includes(search) || result.album.includes(search) || result.genre.includes(search) || result.releaseDate.includes(search)) {
            return true;
        }
        else return false;
    })
    searchFilter(musicList)
}

  console.log(musicLibrary);
  return (
    <div className="App">
      <div>
        <SearchBar searchProperty={searchFilter} />
      </div>
      <div class="parent">
        <div class="div1">
          <div className="border-box">
            <DisplayAllMusic musicLibrary={musicLibrary} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;