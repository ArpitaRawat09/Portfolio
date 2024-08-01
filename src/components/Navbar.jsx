import React, { useState } from 'react'
import pic from "../../public/photo.avif";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      page: "Home"
    },
    {
      id: 2,
      page: "About"
    },
    {
      id: 3,
      page: "Portfolio"
    },
    {
      id: 4,
      page: "Experiance"
    },
    {
      id: 5,
      page: "Contact"
    },
  ]
  return (
    <div className='mx-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md font-sans fixed top-0 left-0 right-0 h-16'>
      <div className='flex justify-between items-center h-16 '>
        <div className='flex space-x-2'>
          <img src={pic} className='h-12 w-12 rounded-full' alt=''></img>
          <h1 className='font-bold text-2xl cursor-pointer'>Abh<span className='text-green-500 text-2xl'>i</span>
            <p className='text-sm'>Web Developer</p>
          </h1>
        </div>
        {/* for desktop screen */}
        <div>
          <ul className='hidden md:flex space-x-8 font-semibold'>
            {
              navItems.map(({ id, page }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{page}</li>
              ))
            }
          </ul>
          <div onClick={() => setMenu(!menu)} className='md:hidden'>{menu ? <FiMenu size={24} /> : <IoClose size={24} />}</div>
        </div>
      </div>
      {/* for mobile screen */}
      {
        menu && (
          <div>
            <ul className='md:hidden font-semibold flex flex-col items-center justify-center h-screen space-y-2 text-xl'>
              {
                navItems.map(({ id, page }) => (
                  <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{page}</li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Navbar
