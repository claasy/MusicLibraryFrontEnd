import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';


function App() {

  const [entries, setEntries] = useState([{songTitle: "In My Life", artist: "The Beatles", albumName: "Rubber Soul", genre: "Rock'n Roll", releaseDate: "12/03/1965"}])

  return (
    <div>
      <DisplayMusic parentEntries={entries} />
    </div>
  );
}

export default App;
