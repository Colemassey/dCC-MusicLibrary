import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"


const EditSongForm = ({ show, handleClose, handleSubmit, song }) => {

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
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <label>Title:</label>
                <input required type='text' className="form-control" value={songTitle} onChange={(event) => setSongTitle(event.target.value)} />
                <label>Artist:</label>
                <input required type='text' className="form-control" value={songArtist} onChange={(event) => setSongArtist(event.target.value)} />
                <label>Album:</label>
                <input required type='text' className="form-control" value={songAlbum} onChange={(event) => setSongAlbum(event.target.value)} />
                <label>Genre:</label>
                <input required type='text' className="form-control" value={songGenre} onChange={(event) => setSongGenre(event.target.value)} />
                <label>Release Date:</label>
                <input required type='text' className="form-control" value={songRelease} onChange={(event) => setSongRelease(event.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={submit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default EditSongForm;