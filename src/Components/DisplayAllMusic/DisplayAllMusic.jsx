import React from 'react';
import './DisplayAllMusic.css'
import '../Searchbar/SearchBar'
import EditSongForm from '../EditSongForm/EditSongForm';
import axios from 'axios';

const DisplayAllMusic = (props) => {

    async function handleDelete(id) {
        await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
    };

    async function handleEdit(requestBody) {
        const response = await axios.put(`http://127.0.0.1:8000/music/${editingId}/`, requestBody).then((response)=> response).catch((error)=> console.log(error));  
        props.updateMusicLibrary(response) 
    };

    const [editingId, setEditingId] = React.useState(undefined)


    return (
        <div>
            <EditSongForm show={!!editingId} handleClose={()=> setEditingId(undefined)} handleSubmit={handleEdit} />
            <div>
                <div className=''>
                <table className=''>
                    {props.musicLibrary.map((song) => {
                        return (
                            <tbody key={song.name}>
                                {console.log(song.id)}
                                <tr className='song'>
                                    <th><large>{song.title}</large></th>
                                </tr>
                                <tr>
                                    <td>{song.artist}</td>
                                </tr>
                                <tr>
                                    <td>{song.album}</td>
                                </tr>
                                <tr className='release'>
                                    <td>{song.release_date}</td>
                                </tr>
                                <tr className='genre'>
                                    <td>{song.genre}</td>
                                </tr>
                                <tr>
                                    <button type='submit' onClick={()=>setEditingId(song.id)} >Edit</button>
                                    <button type='submit' onClick={()=>handleDelete(song.id)}>Delete</button>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
                </div>
            </div>
        </div>

    );
}

export default DisplayAllMusic;