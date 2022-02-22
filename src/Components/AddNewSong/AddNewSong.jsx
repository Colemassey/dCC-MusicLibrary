import React from "react";

const AddNewSong = (props) => {

    const [songTitle, setSongTitle] = useState (song?.title || "");
    const [songArtist, setSongArtist] = useState (song?.artist || "");
    const [songAlbum, setSongAlbum] = useState (song?.album || "");
    const [songGenre, setSongGenre] = useState (song?.genre || "");
    const [songRelease, setSongRelease] = useState (song?.release_date || "");

    function submit(event) {
        handleSubmit({
            title: songTitle,
            artist: songArtist,
            album: songAlbum,
            genre: songGenre,
            release_date: songRelease
        })
        {
            event.preventDefault();
        };
    }
    
    return ( 

     );
}
 
export default AddNewSong;props