import React from 'react'

import pic from "../../public/photo.avif";

import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <>
      <div className='mx-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
          {/* left part text content */}
          <div className='md:w-1/2 mt-12 md:mt-24 sapce-y-2 order-2 md:order-1'>
            <p className='text-xl'>Welcome In My Feed</p>
            <div className='flex space-x-1 text-2xl md:text-4xl mt-2 '>
              <h1>Hello, I'm a</h1>
              {/* <sapn className='text-red-700 font-bold'>Developer</sapn> */}
              <ReactTyped
                className='text-red-700 font-bold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className='text-justify text-sm md:text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!</p>
            <br />
            {/* social media content */}
            <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
              {/* links of social media */}
              <div className='space-y-3'>
                <h1 className='text-md font-semibold mx-4'>Available on</h1>
                <ul className='flex space-x-4'>
                  <li>
                    <RiInstagramFill className='text-2xl cursor-pointer' />
                  </li>
                  <li>
                    <FaLinkedin className='text-2xl cursor-pointer' />
                  </li>
                  <li>
                    < FaGithub className='text-2xl cursor-pointer' />
                  </li>
                  <li>
                    <FaTelegram className='text-2xl cursor-pointer' />
                  </li>
                </ul>
              </div>
              {/* skills tags */}
              <div className='space-y-3'>
                <h1 className='text-md font-semibold'>Currently working on</h1>
                <div className='flex space-x-5 md:mx-0 mx-3'>
                  <SiMongodb className='text-2xl md:text-3xl rounded-full border-[2px] hover:scale-110 duration-200 ' />
                  <SiExpress className='text-2xl md:text-3xl rounded-full border-[2px] hover:scale-110 duration-200 ' />
                  <FaReact className='text-2xl md:text-3xl rounded-full border-[2px] hover:scale-110 duration-200 ' />
                  <FaNodeJs className='text-2xl md:text-3xl rounded-full border-[2px] hover:scale-110 duration-200 ' />
                </div>
              </div>
            </div>
          </div>
          {/* right part image */}
          <div className='md:w-1/2 md:mt-20 md:ml-48 mt-8 order-1'>
            <img className='rounded-full md:h-[450px] md:w-[450px]' src={pic} alt=''></img>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Home
