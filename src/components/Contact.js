import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitData = async (e) => {
        e.preventDefault();
        const res = await fetch('https://portfolioresume-be659-default-rtdb.firebaseio.com/userDataRecords.json',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                })
            }
        )
        if (res) {
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            alert('Data Stored Successfully')
        }
        else {
            alert('Data not stored')
        }
    }

    return (
        <div id='contact' className='pt-28'>
            <h1 className='text-4xl font-bold tracking-widest mx-[11%] sm:text-center my-6'>Contact Me</h1>
            <div className='border-2 border-black bg-orange-100 w-[70%] mx-[6%] sm:w-[50%] sm:mx-[25%] py-[5%]'>
                <form className='flex flex-col items-center'>
                    <input className='border-2 border-black my-4 p-2 w-[75%]' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input className='border-2 border-black my-4 p-2 w-[75%]' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='border-2 border-black my-4 p-2 w-[75%]' placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <input className='border-2 border-black my-4 p-2 w-[75%]' placeholder='Write your message' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={submitData} className='bg-orange-400 p-2 rounded-lg w-[75%] my-4'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact