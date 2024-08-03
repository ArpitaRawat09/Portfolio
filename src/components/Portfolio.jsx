import React from 'react'
import java from "../../public/java.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      image: reactjs,
      name: "ReactJs"
    },
    {
      id: 2,
      image: nodejs,
      name: "NodeJs"
    },
    {
      id: 3,
      image: express,
      name: "Express"
    },
    {
      id: 4,
      image: mongoDB,
      name: "MongoDB"
    },

    {
      id: 5,
      iamge: java,
      name: "Java"
    }

  ]
  return (
    <>
      <div name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
          <sapn className='font-semibold underline'>Featured Projects</sapn>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 my-8'>
          {cardItem.map(({ id, image, name }) => (
            <div key={id} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg       shadow-lg p-1 hover:scale-110 duration-300 cursor-pointer'>
              <img src={image} className='w-[120px] h-[120px] rounded-full p-1 border-[2px]' alt=''></img>
              <div>
                <div className='font-bold px-2 mb-2 text-xl'>{name}</div>
                <p className=' text-gray-700 px-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='px-6 space-x-3 py-4 justify-around'>
                  <button className='px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold'>Video</button>
                  <button className='px-4 py-2 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold'>Source Code</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Portfolio
