import React from 'react'
import { songs } from '../assets/songs'
import { Link } from 'react-router-dom';


const Center = ({setSongNumber, setArtist, setSearchTerm, searchTerm, filteredSongs}) => {
  return (
    <div className='ml-[17vw] mr-[20vw] pt-[1.5vw] p-[2vw]'>
        <div className='flex items-center gap-[5vw]'>
            <input type="search" placeholder='Search...' className='bg-[#00FF90] placeholder:text-[#326d2d] text-[1.4vw] text-black font-semibold px-[1vw] rounded-xl py-[0.5vw]' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <h2 className='font-bold text-[1.6vw] text-[#AAAAAA] cursor-pointer'>Charts</h2>
        </div>

        {searchTerm && <div className="grid gap-[0.5vw] absolute translate-y-[0.5vw] w-[19vw]">
            {filteredSongs.map((song, i) => (
                <div key={i} className="bg-[#2d2d2d] p-[0.5vw] rounded shadow flex items-center gap-[0.5vw]">
                    <img src={song.cover} alt={song.title} className="w-[3vw] h-[3vw] object-cover rounded" />
                    <h2 className="font-bold text-[1vw]">{song.title}</h2>
                    <p className="text-sm text-gray-600">{song.artist}</p>
                </div>
            ))}
        </div>}

        <a href="https://www.temu.com/" className='overflow-clip flex items-center h-[25vw] rounded-2xl my-[2vw]' target='blank'><img src="https://www.nextsmartship.com/wp-content/uploads/2024/06/a-comprehensive-guide-to-temu-shipping-time.jpg" alt="" className='w-fill'/></a>
        
        <h2 className='text-[2vw] font-semibold mb-[1vw]'>Artists</h2>
        <div className='flex gap-[2vw] text-[1.3vw]'>
            <Link to='/artist' onClick={() => setArtist('Eminem')}>
                <img src="https://www.billboard.com/wp-content/uploads/2024/07/eminem-hwof-2020-billboard-1548.jpg" alt="Eminem" className='w-[10vw] h-[10vw] object-cover rounded-full'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('Adele')} className='flex gap-[1vw] items-center'>
                <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" alt="Adele" className='w-[10vw] h-[10vw] object-cover rounded-full'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('Coldplay')} className='flex gap-[1vw] items-center'>
                <img src="https://seatgeekimages.com/performers-landscape/coldplay-827fc3/32/1100x1900.jpg?auto=webp&width=3840&quality=75" alt="Coldplay" className='w-[10vw] h-[10vw] object-cover rounded-full'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('Tupac Shakur')} className='flex gap-[1vw] items-center'>
                <img src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/11/05/1331757981429_2/tupac-shakur" alt="Tupac Shakur" className='w-[10vw] h-[10vw] object-cover rounded-full'/>
            </Link>

            <Link to='/artist' onClick={() => setArtist('The Beatles')} className='flex gap-[1vw] items-center'>
                <img src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" alt="The Beatles" className='w-[10vw] h-[10vw] object-cover rounded-full'/>
            </Link>
        </div>

        <h2 className='text-[2vw] font-semibold mt-[2vw] mb-[1vw]'>Songs</h2>

        <div className='flex flex-wrap gap-[2vw]'>
            {songs.map((e, id) => <div id={id} key={id}>
                <img src={e.cover} className='w-[10vw] h-[10vw] object-cover rounded-xl shadow-xl shadow-black cursor-pointer mb-[0.5vw]' onClick={() => {setSongNumber(id)}}></img>
                <p className='text-[1.04vw] font-bold'>{e.title}</p>
                <p className='text-[0.8vw]'>{e.artist}</p>
            </div>)}
        </div>
    </div>
  )
}

export default Center