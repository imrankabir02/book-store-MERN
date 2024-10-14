import React from 'react'
import banner from "../assets/Banner.jpg"
export default function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-28">
                <div className="w-full md:w-1/2 order-2 md:order-1 px-5">
                    <div className="space-y-10">
                        <h1 className='text-4xl font-semibold'>
                            Hello, Want to Learn New Tech?
                            Browse {" "}
                            <span className='text-blue-400'>
                                EveryDay!
                            </span>
                        </h1>
                        <p className='text-xl '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariat.
                        </p>
                        <label className="input input-bordered flex items-center gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn mt-6 mb-6 btn-secondary">Send</button>
                </div>
                <div className="w-full md:w-1/2 order-1 mb-6 px-5">
                    <img src={banner} className="w-92 h-100 rounded-lg shadow-xl hover:scale-105 duration-200" alt="Banner" />
                </div>
            </div>
        </>
    )
}
