import React from 'react';
import './DisplayAllMusic.css'

const DisplayAllMusic = (props) => {

    return (
        <div className='displaymusic'>


            <table>
                {props.musicLibrary.map((song) => {
                    return (
                        <tbody>
                            <tr>
                                <th>{song.title}</th>
                            </tr>
                            <tr>
                                <td>{song.artist}</td>
                            </tr>
                            <tr>
                                <td>{song.genre} {song.releaseDate}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>

    );
}

export default DisplayAllMusic;