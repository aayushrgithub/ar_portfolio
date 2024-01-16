import React, { useContext } from 'react'
import amazon from "../utils/images/amazon1.PNG"
import fileadder from "../utils/images/fileadder.PNG"
import spotify from "../utils/images/Spotify.PNG"
import swiggy from "../utils/images/swiggy.PNG"
import youtube from "../utils/images/youtube.PNG"
import netflix from "../utils/images/netflix.jpg"
import Display from './Display'
import MenuContext from '../utils/MenuContext'
import ProjectCard from './ProjectCard'
import { RxDropdownMenu } from "react-icons/rx";
import DownDrop from './DownDrop'
import ToggleDropDown from '../utils/ToggleDropDown'



const Projects = () => {

    const { isDisplaying, setAppDisplaying } = useContext(MenuContext);
    const { isNextOpen, setAppIsNextOpen } = useContext(ToggleDropDown);

    const handleClick = () => {
        setAppIsNextOpen(!isNextOpen);
    }
    return (
        <div id='project' className='pt-28'>
            {isDisplaying ? <Display /> : null}
            <div className={isDisplaying ? 'flex justify-between mx-[5%] sm:mx-[9.5%] opacity-20' : 'flex justify-between mx-[5%] sm:mx-[9.5%]'}>
                <h1 className='text-3xl w-[40%] sm:text-4xl font-bold tracking-wide sm:tracking-widest'>My Recent Projects</h1>
                <div onClick={() => handleClick()} className='sm:hidden mr-24'>
                    <RxDropdownMenu />
                </div>
                <div className={isNextOpen ? 'absolute mx-[45%] my-5 border-orange-400 bg-orange-300 rounded-lg p-3 w-[30%]' : null}>
                    {isNextOpen ? <DownDrop /> : null}
                </div>
                <div className='hidden sm:block'>
                    <button className='mx-4 border border-black p-2'>All</button>
                    <button className='mx-4 border border-black p-2'>Web Development</button>
                    <button className='mx-4 border border-black p-2'>Web Design</button>
                </div>
            </div>

            <div className={isDisplaying ? 'grid grid-cols-1 sm:grid-cols-3 gap-8 sm:mx-[10%] pt-20 opacity-20' : 'grid grid-cols-1 sm:grid-cols-3 gap-8 ml-2 mr-[20%] mx-[15%] sm:mx-[10%] pt-10 sm:pt-20'}>
                <ProjectCard pic={amazon} title="Amazon Clone" de="E-Commerce website that encapsulates all latest technology features" tech="HTML , CSS , REACT , JAVASCRIPT" />
                <ProjectCard pic={netflix} title="MovieFlix" de="Movie website that encapsulates all latest technology features and movies" tech="HTML , REACT , JAVASCRIPT , TAILWINDCSS , REDUX" />
                <ProjectCard pic={fileadder} title="File Adder" de="File Adder website that encapsulates all latest technology features" tech="HTML , CSS , JAVASCRIPT" />
                <ProjectCard pic={swiggy} title="Food Order App" de="Food Order website that encapsulates all latest technology features" tech="HTML , REACT , JAVASCRIPT , TAILWINDCSS , REDUX" />
                <ProjectCard pic={youtube} title="Youtube Clone" de="Youtube website that encapsulates all latest technology features" tech="HTML , REACT , JAVASCRIPT , TAILWINDCSS , CONTEXT API" />
                <ProjectCard pic={spotify} title="Music App" de="Music website that encapsulates all latest technology features" tech="HTML , REACT , JAVASCRIPT , TAILWINDCSS" />
            </div>
        </div>
    )
}


export default Projects 