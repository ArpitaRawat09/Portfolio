import React from 'react'
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import tailwind from "../../public/tailwind.png";
import bootstrap from "../../public/bootstrap.png";

const Experience = () => {
  const imageItems = [
    {
      id: 1,
      image: html,
      name: "Html"
    },
    {
      id: 2,
      image: css,
      name: "CSS"
    },
    {
      id: 3,
      image: javascript,
      name: "Javascript"
    },
    {
      id: 4,
      image: java,
      name: "Java"
    },
    {
      id: 5,
      image: tailwind,
      name: "Tailwind"
    },
    {
      id: 6,
      image: bootstrap,
      name: "Bootstrap"
    }
  ]
  return (
    <>
      <div name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
          <p> I've no experience .</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-8'>
          {imageItems.map(({ id, image, name }) => (
            <div key={id} className='md:w-[220px] md:h-[220px] rounded-full p-1 border-[2px] shadow-lg hover:scale-110 duration-300 flex flex-col  justify-center items-center'>
              <img className='w-[150px] rounded-full' src={image} alt=''></img>
              <h1>{name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Experience
