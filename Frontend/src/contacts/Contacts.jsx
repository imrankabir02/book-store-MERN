import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Contacts() {
    return (
        <>
            <div>
                <Navbar />
                <div className='min-h-screen'>
                    <Contact />
                </div>
                <Footer />
            </div>
        </>
    )
}
