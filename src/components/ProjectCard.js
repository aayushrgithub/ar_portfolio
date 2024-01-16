import React, { useContext, useEffect } from 'react'
import MenuContext from '../utils/MenuContext'
import Aos from 'aos'
import 'aos/dist/aos.css';

const ProjectCard = ({ pic, title, de, tech }) => {

    const { isDisplaying, setAppDisplaying, image, setAppImage, name, description, techstack, setAppName, setAppDescription, setAppTechStack } = useContext(MenuContext);

    const handleClick = () => {
        setAppDisplaying(true);
        setAppImage(pic)
        setAppName(title);
        setAppDescription(de);
        setAppTechStack(tech);
    }

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000" className='flex justify-center group hover: bg-gradient-to-r from-orange-400'>
            <img className='group-hover:opacity-10 ' src={pic} />
            <div className='hidden group-hover:block absolute'>
                <button onClick={() => handleClick()} className='mt-28 p-2 rounded-lg bg-black text-white'>See Details</button>
            </div>
        </div>
    )
}

export default ProjectCard