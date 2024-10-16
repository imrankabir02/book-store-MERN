import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
        <>
            <div>
                <hr />
                <footer className="p-10 rounded footer footer-center bg-base-200 text-base-content">
                    <nav className="grid grid-flow-col gap-4">
                        <a href='/about' className="link link-hover">About</a>
                        <a href='/contact' className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <div className="flex items-center gap-6 text-3xl">
                            <a href="https://www.facebook.com/imrankabir02/" target="_blank" rel="noopener noreferrer" className="text-blue-600 transition-all duration-500 transform hover:text-blue-400 hover:scale-110">
                                <SiFacebook />
                            </a>
                            <a href="https://www.instagram.com/imrankabir02" target="_blank" rel="noopener noreferrer" className="text-pink-600 transition-all duration-500 transform hover:text-pink-600 hover:scale-110">
                                <SiInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/imrankabir02" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 transform text-sky-500 hover:text-sky-400 hover:scale-110">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.github.com/imrankabir02" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-all duration-500 transform hover:text-gray-300 hover:scale-110">
                                <FaGithub />
                            </a>
                        </div>
                    </nav>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by {" "}
                            <span className='text-blue-400'>
                                <a href="https://imrankabir02.vercel.app/">
                                    Kabir
                                </a>
                            </span>
                        </p>
                    </aside>
                </footer>
            </div>
        </>
    )
}
