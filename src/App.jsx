import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSongForm';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SearchBarForm from './Components/SearchBarForm/SearchBarForm';
import './App.css'

function App() {

  const [entries, setEntries] = useState([{songTitle: "In My Life", artist: "The Beatles", albumName: "Rubber Soul", genre: "Rock'n Roll", releaseDate: "12/03/1965"}])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setEntries(response.data);
  }

  async function addNewSong(entry){

    let response = await axios.post('http://127.0.0.1:8000/api/music/', entry)
    if(response.status === 201){
      await getAllSongs();
    }
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='border-box'>
          <NavigationBar />
        </div>
      </div>
      <div className='row'>
        <div className='border-box'>
          <SearchBarForm />
        </div>
      </div>
      <div className='row'> 
        <div className='border-box'>
          <AddSongForm addNewSongProperty={addNewSong} />
        </div>
      </div>  
      <div className='row'>
        <div className='border-box'>
          <DisplayMusic parentEntries={entries} />
        </div>
      </div>
    </div>
  );
}

export default App;
