import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSongForm';


function App() {

  const [entries, setEntries] = useState([{songTitle: "In My Life", artist: "The Beatles", albumName: "Rubber Soul", genre: "Rock'n Roll", releaseDate: "12/03/1965"}])

  function addNewSong(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayMusic parentEntries={entries} />
      <AddSongForm addNewSongProperty={addNewSong} />

    </div>
  );
}

export default App;
