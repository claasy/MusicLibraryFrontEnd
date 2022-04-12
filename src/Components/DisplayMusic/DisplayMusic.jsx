import React from 'react';


const DisplayMusic = (props) => {
    return ( 
        <table className='table'>
            <thead>
            <tr>
                <th>Song Title</th>
                <th>Artist</th>
                <th>Album Name</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index) => {
                {console.log("Entry: ", entry)}
                return (
                <tr key={index}>
                    <td>{entry.title}</td>
                    <td>{entry.artist}</td>
                    <td>{entry.album}</td>
                    <td>{entry.genre}</td>
                    <td>{entry.release_date}</td>
                    <button>Delete Song</button>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}
 
export default DisplayMusic;