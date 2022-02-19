import React from 'react';
import './DisplayAllMusic.css'
import '../Searchbar/SearchBar'

const DisplayAllMusic = (props) => {



    return (
        <div>
            <div className='displaymusic'>
                <table >
                    {props.musicLibrary.map((song) => {
                        return (
                            <tbody key={song.name}>
                                <tr className='song'>
                                    <th>{song.title}</th>
                                </tr>
                                <tr>
                                    <td>{song.artist}</td>
                                </tr>
                                <tr>
                                    <td>{song.album} {song.releaseDate}</td>
                                </tr>
                                <tr>
                                    <td>{song.genre}</td>
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        </div>

    );
}

export default DisplayAllMusic;