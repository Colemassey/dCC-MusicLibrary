import React from 'react';

const DisplaySingleSong = (props) => {



    return ( 
        <div>
            <table>
                <th><large>Song Title</large></th>
                <tr>
                    <td>Artist</td>
                </tr>
                <tr>
                    <td>Album</td>
                </tr>
                <tr>
                    <td>Release</td>
                </tr>
                <tr>
                    <td>Genre</td>
                </tr>
                <tr>
                    <td>Create</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </tr>
            </table>
        </div>
     );
}
 
export default DisplaySingleSong;