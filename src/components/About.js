import Aayush_Image from "../utils/images/Aayush_Image.PNG";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="sm:flex pt-14">
            <div className="px-4 sm:px-0 sm:mx-[9.5%]">
                <p className="tracking-widest">Hello Welcome</p>
                <h1 className="text-3xl sm:text-4xl tracking-wide pt-5 sm:w-[70%] font-bold">I'm Aayush Rathi Software Developer</h1>
                <div className="flex pt-6 items-center">
                    <button className=" bg-orange-400 text-white rounded-lg p-2 px-5">Hire Me</button>
                    <h1 className="mx-7 border-b">Download Resume</h1>
                </div>
                <div>
                    <p className="pt-10 w-[80%] sm:w-[100%]">
                        In this corner of the web, you'll find a collection of my software engineering projects,
                        each a testament to my dedication to problem-solving and technological advancement.
                        Dive into my portfolio and discover the digital solutions I've crafted.
                    </p>
                </div>
                <div className="flex pt-10 items-center">
                    <h1>Follow me:</h1>
                    <div className="w-[50%]">
                        <ul className="flex justify-evenly">
                            <li className="hover:scale-150 ease-in duration-300"><FaLinkedin /></li>
                            <li className="hover:scale-150 ease-in duration-300"><MdOutlineEmail /></li>
                            <li className="hover:scale-150 ease-in duration-300"><FaGithub /></li>
                            <li className="hover:scale-150 ease-in duration-300"><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex w-[30%] pt-10 mx-4 sm:mx-0 sm:items-center sm:pt-20 sm:pr-40 sm:w-[80%] sm:text-right">
                <img className=" rounded-full" src={Aayush_Image} />
                <div className="mx-5 mt-7 sm:mx-8">
                    <h1 className="text-2xl font-bold text-orange-400">13+</h1>
                    <h1 className="text-2xl font-bold text-orange-400 tracking-wider">Projects Completed</h1>
                </div>
            </div>
        </div>
    )
}
export default About;