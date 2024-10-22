import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';

export default function Freebook() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log("API response: ", res.data);

                // Only set the books state once
                if (res.data && res.data.data) {
                    setBooks(res.data.data.filter((data) => data.category === "Free")); // If your API returns { data: [...books] }
                } else {
                    setBooks(Array.isArray(res.data) ? res.data.filter((data) => data.category === "Free") : []); // If API returns books directly
                }
            } catch (error) {
                console.log(error);
                setBooks([]);
            }
        };
        getBooks();
    }, []);
    // const filterData = list.filter((data) => data.category === "Free");
    // console.log(filterData);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='container px-4 mx-auto max-w-screen-2xl md:px-20 '>
                <div>
                    <h1 className='pb-2 text-2xl font-semibold'>
                        Free offered Books
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {books && books.length > 0 ? (
                            books.map((item) => (
                                <Cards key={item._id} item={item} />
                            ))

                        ) : (
                            <p>No Books Available</p>
                        )}
                    </Slider>
                </div>
            </div>
        </>
    )
}
