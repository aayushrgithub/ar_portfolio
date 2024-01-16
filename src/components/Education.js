import React, { useEffect } from 'react'
import frontend from "../utils/images/front-end.png"
import Aos from 'aos'
import 'aos/dist/aos.css';


const Education = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div id='education' className='pt-28'>
            <div className='sm:text-center'>
                <h1 className='text-4xl font-bold tracking-widest mx-[15%]'>Education</h1>
                <p className='ml-6 mr-20 sm:w-[50%] sm:mx-96 pt-6'>My educational journey has been a cornerstone of my growth as a software Developer
                    and I've remained dedicated to ongoing learning, consistently updating my skills
                    to adapt to the dynamic field of technology ensuring I stay at the forefront of
                    emerging technologies and best practices.
                </p>
            </div>

            <div className='pt-8'>
                <div className="absolute w-1 bg-orange-400 h-[103.3%] sm:h-[113%] mx-40 sm:mx-0 sm:left-1/2 "></div>


                <div>
                    <div className='mx-[36.5%] sm:mx-[48.8%]'>
                        <img className=' absolute rounded-full p-2 bg-orange-400 my-[37%] sm:my-[9%]' src={frontend} />
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1200" className='w-[30%] mx-[5%] px-4 sm:px-4 sm:mx-[30%] text-left sm:w-[15%] py-7 border-2 border-gray-100'>
                        <p className='sm:text-2xl text-orange-400 font-bold'>The LNM Institute of Information Technology, Jaipur</p>
                        <p className='my-2 font-semibold'>2018-2022</p>
                        <p className='my-2 font-semibold'>B.Tech</p>
                        <p className='font-semibold'>Computer Engineering</p>
                    </div>
                </div>




                <div>
                    <div className='mx-[36.5%] sm:mx-[48.8%]'>
                        <img className=' absolute rounded-full p-2 bg-orange-400 my-[23%] sm:my-[5%]' src={frontend} />
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1200" className='w-[30%] mx-[50%] px-5 sm:px-4 sm:mx-[55%] text-left sm:w-[15%] py-7 border-2 border-gray-100 my-12'>
                        <p className='sm:text-2xl text-orange-400 font-bold'>SR Public Sr. Sec. School, Kota</p>
                        <p className='my-2 font-semibold'>2017</p>
                        <p className='my-2 font-semibold'>CBSE</p>
                    </div>
                </div>


                <div>
                    <div className='mx-[36.5%] sm:mx-[48.8%]'>
                        <img className=' absolute rounded-full p-2 bg-orange-400 my-[23%] sm:my-[6%]' src={frontend} />
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1200" className='w-[30%] mx-[5%] px-4 sm:px-4 sm:mx-[30%] text-left sm:w-[15%] py-7 border-2 border-gray-100'>
                        <p className='sm:text-2xl text-orange-400 font-bold'>Laxmi International School, Sarigam</p>
                        <p className='my-2 font-semibold'>2015</p>
                        <p className='my-2 font-semibold'>CBSE</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Education