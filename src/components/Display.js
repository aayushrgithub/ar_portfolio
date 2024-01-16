import React, { useContext } from 'react'
import amazon from "../utils/images/amazon1.PNG"
import MenuContext from '../utils/MenuContext'
import { ImCross } from "react-icons/im";


const Display = () => {

    const { isDisplaying, setAppDisplaying, image, setAppImage, name, description, techstack, setAppName, setAppDescription, setAppTechStack } = useContext(MenuContext)

    const handleEvent = () => {
        setAppDisplaying(false)
    }
    return (
        <div className='mx-[30%] w-[30%] absolute z-50 shadow-2xl shadow-orange-400 bg-orange-200 p-4'>
            <ImCross className='cursor-pointer mx-[95%] mb-4' onClick={() => handleEvent()} />
            <img src={image} />
            <h1 className='text-black font-semibold my-2'>{name}</h1>
            <p className='text-black'>{description}</p>
            <p>{techstack}</p>
        </div>
    )
}

export default Display