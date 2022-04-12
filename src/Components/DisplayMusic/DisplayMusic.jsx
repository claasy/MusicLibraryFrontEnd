import React from 'react';


const DisplayMusic = (props) => {

const handleDelete = (id) => {
   
    // do something here 

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     let newSong = {
    //         songTitle: songTitle,
    //         artist: artist,
    //         albumName: albumName,
    //         genre: genre,
    //         releaseDate: releaseDate
    //     };
    //     console.log(newSong);
    //     props.addNewSongProperty(newSong)

    props.deleteSong(id)
}


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
                    <button onClick={() => handleDelete(entry.id)}>Delete Song</button>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}
 
export default DisplayMusic;