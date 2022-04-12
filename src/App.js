import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSongForm';
import NavigationBar from './Components/NavigationBar/NavigationBar';


function App() {

  const [entries, setEntries] = useState([{songTitle: "In My Life", artist: "The Beatles", albumName: "Rubber Soul", genre: "Rock'n Roll", releaseDate: "12/03/1965"}])

  function addNewSong(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavigationBar />
      <AddSongForm addNewSongProperty={addNewSong} />
      <DisplayMusic parentEntries={entries} />
      
    </div>
  );
}

export default App;
