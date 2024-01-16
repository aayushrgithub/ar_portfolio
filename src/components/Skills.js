import React from 'react'
import html from "../utils/images/html.png"
import cpp from "../utils/images/c++.png"
import reactjs from "../utils/images/reactjs.png"
import js from "../utils/images/js.png"
import css from "../utils/images/css.png"
import tailwind from "../utils/images/tailwind.png"




const Skills = () => {
    return (
        <div id='skill'>
            <h1 className='text-4xl font-bold tracking-widest sm:text-center mx-[27%] pt-28'>Skills</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-8 ml-2 sm:mx-[20%] pt-20'>
                <div className='shadow-md shadow-red-500 mr-[23%] sm:mr-0 ml-3 sm:ml-0 px-[30%] my-4 sm:my-0 sm:px-24 py-4 hover:scale-110 ease-in duration-300'>
                    <img className='w-20 sm:w-28' src={html} alt='pic' />
                    <p className='px-2 sm:px-7 mt-2'>HTML</p>
                </div>

                <div className='shadow-md shadow-blue-500 mr-[23%] sm:mr-0 ml-3 sm:ml-0 px-[30%] my-4 sm:my-0 sm:px-24 py-4 hover:scale-110 ease-in duration-300'>
                    <img className='w-20 sm:w-28' src={reactjs} alt='pic' />
                    <p className='px-1 sm:px-5 mt-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-blue-500 mr-[23%] sm:mr-0 ml-3 sm:ml-0 px-[30%] my-4 sm:my-0 sm:px-24 py-4 hover:scale-110 ease-in duration-300'>
                    <img className='w-20 sm:w-28' src={css} alt='pic' />
                    <p className='px-3 sm:px-7 mt-2'>CSS</p>
                </div>

                <div className='shadow-md shadow-blue-500 mr-[23%] sm:mr-0 ml-3 sm:ml-0 my-4 sm:my-0 px-[30%] sm:px-24 py-4 hover:scale-110 ease-in duration-300'>
                    <img className='w-28' src={cpp} alt='pic' />
                    <p className='px-3 sm:px-7 mt-2'>C++</p>
                </div>
                <div className='shadow-md shadow-yellow-500 mr-[23%] sm:mr-0 ml-3 sm:ml-0 my-4 sm:my-0 px-[30%] sm:px-24 py-4 hover:scale-110 ease-in duration-300'>
                    <img className='w-28' src={js} alt='pic' />
                    <p className='sm:px-3 mt-2'>JAVSCRIPT</p>
                </div>
                <div className='shadow-md shadow-blue-500 mr-[23%] sm:mr-0 ml-3 sm:ml-0 my-4 sm:my-0 px-[30%] sm:px-24 pt-10 hover:scale-110 ease-in duration-300'>
                    <img className='w-28' src={tailwind} alt='pic' />
                    <p className='sm:px-4 mt-5'>TAILWIND</p>
                </div>
            </div>
        </div>
    )
}

export default Skills