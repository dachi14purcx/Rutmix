import Artist from "./components/Artist";
import Center from "./components/Center";
import MusicBar from "./components/MusicBar";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { songs } from "./assets/songs";

function App() {
  const [songNumber, setSongNumber] = useState(0);
  const [artist, setArtist] = useState()
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex'>
      <SideBar />
      <MusicBar songNumber={songNumber} setSongNumber={setSongNumber} />

      <Routes>
        <Route path="/" element={<Center setSongNumber={setSongNumber} setArtist={setArtist} searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredSongs={filteredSongs}/>}/>
        <Route path="/artist" element={<Artist artist={artist}/>}/>
      </Routes>
    </div>
  );
}

export default App;