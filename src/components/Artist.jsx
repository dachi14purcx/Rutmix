import React, { useState, useEffect } from 'react'
import { songs } from '../assets/songs'
import { artistInfo } from '../assets/artistsInfo'

const Artist = ({ artist }) => {
  const [song, setSong] = useState([])

  useEffect(() => {
    if (artist === 'Eminem') {
      setSong(songs.slice(0, 5))
    } else if (artist === 'Adele') {
      setSong(songs.slice(5, 10))
    } else if (artist === 'Coldplay') {
      setSong(songs.slice(10, 15))
    } else if (artist === 'Tupac Shakur') {
      setSong(songs.slice(15, 20))
    } else if (artist === 'The Beatles') {
      setSong(songs.slice(20, 25))
    }
  }, [artist])

  const info = artistInfo[artist]

  return (
    <div className='ml-[17vw] mr-[20vw] pt-[0vw] p-[2vw]'>
      <div className='my-[4vw]'>
        <img src={info.image} alt={info.name} className='w-[10vw] h-[10vw] object-cover rounded-full shadow-lg float-left mr-[1.5vw] mb-[1vw]'/>
        <h1 className='text-[2vw] font-bold mb-[0.5vw]'>{info.name}</h1>
        <p className='text-[1.05vw]'> {info.description} </p>
      </div>

      <h2 className='text-[1.6vw] font-semibold mb-[1vw]'>Songs:</h2>
      <div className='flex flex-wrap gap-[2vw]'>
        {song.map((e, i) => (
        <div key={i}>
            <img
              src={e.cover}
              className='w-[10vw] h-[10vw] object-cover rounded-xl shadow-xl shadow-black cursor-pointer mb-[0.5vw]'
              alt={e.title}
            />
            <p className='text-[1.04vw] font-bold'>{e.title}</p>
            <p className='text-[0.8vw]'>{e.artist}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Artist