import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { RxDropdownMenu } from "react-icons/rx";
import ToggleDropDown from '../utils/ToggleDropDown';


const Header = () => {

    const { isOpen, setAppIsOpen } = useContext(ToggleDropDown);
    const handleClick = () => {
        setAppIsOpen(!isOpen);
    }
    return (
        <div className='flex justify-around items-center p-5 font-semibold'>
            <div className='flex'>
                <h1 className='w-[40px] h-[40px] p-4 pt-2 pl-3.5 font-semibold text-white rounded-full bg-orange-400'>A</h1>
                <h1 className='text-black font-semibold text-lg pt-2 mx-2 tracking-widest'>AAYUSH</h1>
            </div>

            <div>
                <ul className='hidden sm:flex'>
                    <Link to="about"><li className='mx-5 tracking-widest cursor-pointer'>About</li></Link>
                    <Link to='education'><li className='mx-5 tracking-widest cursor-pointer'>Education</li></Link>
                    <Link to='skill'><li className='mx-5 tracking-widest cursor-pointer'>Skills</li></Link>
                    <Link to='project'><li className='mx-5 tracking-widest cursor-pointer'>Projects</li></Link>
                    <Link to='contact'><li className='mx-5 tracking-widest cursor-pointer'>Contact</li></Link>
                </ul>
            </div>

            <div>
                <Link to='contact'><h1 className='hidden sm:block mx-12 tracking-widest cursor-pointer'>Feedback</h1></Link>
            </div>
            <div onClick={() => handleClick()} className='sm:hidden mx-20'>
                <RxDropdownMenu />
            </div>
        </div>
    )
}

export default Header