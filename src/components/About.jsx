import React from 'react'

const About = () => {
  const aboutSection = [
    {
      tittle: "Education & Training",
      desc: "[Degree/Certification], [Institution], [Year] [Degree/Certification], [Institution], [Year] [Relevant Course], [Platform/Institution], [Year]",
    },

    {
      tittle: "Skills & Expertise",
      desc: "Proficient in [Programming Languages] Experienced with [Software Tools/Technologies] Strong grasp of [Design Principles/Concepts] Excellent problem-solving skills Effective communicator and collaborator",
    },
    {
      tittle: 'Professional Experience',
      desc: "[Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Freelance/Contract Work], [Client/Organization], [Dates] [Brief description of projects and contributions]",
    },
    {
      tittle: "Achievements & Awards",
      desc: "[Award/Recognition], [Organization/Institution], [Year] [Achievement], [Organization/Platform], [Year]",
    },
    {
      tittle: "Mission Statement",
      desc: "My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.PortFolio",
    }
  ];
  return (
    <>
      <div className='mx-w-screen-2xl container mx-auto px-4 md:px-20 my-20' name="About">
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>Hello, I'm Abhi, a passionate Web developer with a keen eye for MERN Stack . With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.</p>
        {aboutSection.map((section, index) => (
          <div key={index} className='my-5'>
            <h1 className='text-green-600 text-xl font-semibold'>{section.tittle}</h1>
            <p>{section.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default About
