import {useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
import DisplayAllMusic from "./Components/DisplayAllMusic/DisplayAllMusic";

function App() {

  const [musicLibrary, setMusicLibrary] = useState([]);

  useEffect(() => {
    getAllMusicLibrary();

  }, )
  async function getAllMusicLibrary() {
    let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    setMusicLibrary(response.data);

  }

  console.log(musicLibrary);
  return (
    <div className="App">
      <DisplayAllMusic musicLibrary={musicLibrary} />
    </div>
  );
}

export default App;