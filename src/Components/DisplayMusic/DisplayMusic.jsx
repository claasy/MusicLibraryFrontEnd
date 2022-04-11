
const DisplayMusic = (props) => {
    return ( 
        <table>
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
            {props.parentEntries.map((entry) => {
                return (
                <tr>
                    <td>{entry.songTitle}</td>
                    <td>{entry.artist}</td>
                    <td>{entry.albumName}</td>
                    <td>{entry.genre}</td>
                    <td>{entry.releaseDate}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
}
 
export default DisplayMusic;