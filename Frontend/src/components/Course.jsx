import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import list from '../assets/list.json'
import { Link } from 'react-router-dom'
import axios from "axios";

export default function Course() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log("API response: ", res.data);

                // Only set the books state once
                if (res.data && res.data.data) {
                    setBooks(res.data.data); // If your API returns { data: [...books] }
                } else {
                    setBooks(Array.isArray(res.data) ? res.data : []); // If API returns books directly
                }
            } catch (error) {
                console.log(error);
                setBooks([]);
            }
        };
        getBooks();
    }, []);
    return (
        <>
            <div className='container px-4 mx-auto max-w-screen-2xl md:px-20'>
                <div className='space-y-2 text-2xl font-semibold text-center mt-28'>
                    <h1>
                        Hey, Congo! Start Learning!
                    </h1>
                    <p className='text-sm font-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to="/">
                        <button className='text-sm font-normal cursor-pointer rounded-lg border-[1px] hover:bg-blue-500 hover:text-white duration-200 px-2 py-1'>
                            Back
                        </button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 mt-12 md:grid-cols-4'>
                    {books && books.length > 0 ? (
                        books.map((item) => (
                            <Cards key={item._id} item={item} />
                        ))

                    ) : (
                        <p>No Books Available</p>
                    )}
                </div>
            </div>
        </>
    )
}

