import React, { useContext } from 'react'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import MenuContext from '../utils/MenuContext'
import Display from './Display'
import Contact from './Contact'
import Footer from './Footer'
import DropDown from './DropDown'
import ToggleDropDown from '../utils/ToggleDropDown'

const Center = () => {

    const { isOpen, setAppIsOpen } = useContext(ToggleDropDown);
    return (
        <div>
            <div className={isOpen ? 'absolute mx-[55%] border-orange-400 bg-orange-300 rounded-lg p-3' : null}>
                {isOpen ? <DropDown /> : null}
            </div>
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Center