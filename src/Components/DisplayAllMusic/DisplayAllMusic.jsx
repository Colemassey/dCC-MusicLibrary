import React from 'react';
import './DisplayAllMusic.css'
import '../Searchbar/SearchBar'

const DisplayAllMusic = (props) => {



    return (
        <div>
            <div>
                <div className='table-wrapper-scroll-y my-custom-scrollba'>
                <table className='table table-bordered table-striped mb-0'>
                    {props.musicLibrary.map((song) => {
                        return (
                            <tbody key={song.name}>
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