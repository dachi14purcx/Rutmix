import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='h-[100vh] w-[17vw] bg-[#2D2D2D] p-[1vw] fixed'>
        <Link to={'/center'} className='text-[2.3vw] font-medium mb-[2vw]'>Rythmix</Link>

        <div className='w-[15vw] h-[0.3vw] bg-[#AAAAAA] rounded-full my-[1vw]'></div>

        <div className='text-[#AAAAAA] font-medium'>
            <div className='flex flex-col gap-[1.5vw] text-[1.3vw]'>
                <h2 className='text-[1.7vw]'>Artists</h2>

                <a href='https://en.wikipedia.org/wiki/Eminem' target='blank' className='flex gap-[1vw] items-center'>
                    <img src="https://www.billboard.com/wp-content/uploads/2024/07/eminem-hwof-2020-billboard-1548.jpg" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Eminem</p>
                </a>
                
                <a href='https://en.wikipedia.org/wiki/pdele' target='blank' className='flex gap-[1vw] items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Adele</p>
                </a>
                
                <a href='https://en.wikipedia.org/wiki/Coldplay' target='blank' className='flex gap-[1vw] items-center'>
                    <img src="https://seatgeekimages.com/performers-landscape/coldplay-827fc3/32/1100x1900.jpg?auto=webp&width=3840&quality=75" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Cold Play</p>
                </a>
                
                <a href='https://en.wikipedia.org/wiki/Tupac_Shakur' target='blank'className='flex gap-[1vw] items-center'>
                    <img src="https://img.redbull.com/images/q_auto,f_auto/redbullcom/2015/11/05/1331757981429_2/tupac-shakur" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Tupac</p>
                </a>
                
                <a href='https://en.wikipedia.org/wiki/The_Beatles' target='blank 'className='flex gap-[1vw] items-center'>
                    <img src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3970/production/_108240741_beatles-abbeyroad-square-reuters-applecorps.jpg" alt="" className='w-[3.7vw] h-[3.7vw] object-cover rounded-full'/>
                    <p>Beatles</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default SideBar