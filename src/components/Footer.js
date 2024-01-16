import React from 'react'

const Footer = () => {
    return (
        <div className=' flex items-center pt-14 bg-[#1d212e] mt-28'>
            <div className='w-[70%] sm:w-[30%] mx-[9.5%]'>
                <h1 className='text-3xl sm:text-4xl text-white font-bold'>Do you want to make best software product</h1>
                <button className=" bg-orange-400 text-white rounded-lg p-2 px-5 my-7 mx-16 sm:mx-0">Hire me</button>
            </div>
            <div>
                <ul className='hidden sm:flex mx-[5%]'>
                    <li className='mx-5 tracking-widest text-white'>About</li>
                    <li className='mx-5 tracking-widest text-white'>Education</li>
                    <li className='mx-5 tracking-widest text-white'>Skills</li>
                    <li className='mx-5 tracking-widest text-white'>Projects</li>
                    <li className='mx-5 tracking-widest text-white'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer