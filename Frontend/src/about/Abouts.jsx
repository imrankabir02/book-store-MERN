import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'

export default function Abouts() {
    return (
        <>
            <div>
                <Navbar />
                <div className='min-h-screen'>
                    <About />
                </div>
                <Footer />
            </div>
        </>
    )
}
