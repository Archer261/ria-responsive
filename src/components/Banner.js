import React, { useState, useEffect } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import test from '../assets/gallery/image_67193857.JPG';
import test2 from '../assets/gallery/blackFriday.png';
import test3 from '../assets/gallery/bannerImg.jpg';


const slides = [
    { title: 'Macomb Student Day', description: 'Lorem ipsum', image: test, button: "Buy now", user: "me", userProfile: "https://i.imgur.com/4KeKvtH.png" },
    { title: 'Black Friday Sale', description: 'Lorem ipsum', image: test2, button: "Buy now", user: "me", userProfile: "https://i.imgur.com/4KeKvtH.png" },
    { title: 'Rias Touch', description: 'Lorem ipsum', image: test3, button: "Buy now", user: "me", userProfile: "https://i.imgur.com/4KeKvtH.png" }
];


function Banner({ }) {


    const [dynamicSlides, setdynamicSlides] = useState([]);

    useEffect(() => {
        setdynamicSlides(slides);
        return () => { };
    }, [setdynamicSlides, slides]);

    return (
        <>
            <div className='container'>
                <Slider className="slider-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${slide.image}') no-repeat center center` }}
                        >
                            <div className="inner">
                                <h1>{slide.title}</h1>
                                <p>{slide.description}</p>
                                <button>{slide.button}</button>
                            </div>
                            <section>

                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Banner;