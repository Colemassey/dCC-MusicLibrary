import {useState, useEffect} from "react";
import './App.css';
import axios from 'axios';

function App() {

  const [musicLibrary, setMusicLibrary] = useState([]);

  async function getAllMusicLibrary() {
    let response = await axios.get(
      'http://www.devcodecampmusiclibrary.com/api/music'
    )}

  return (
    <div className="App">

    </div>
  );
}

export default App;
