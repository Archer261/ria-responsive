import React, { useState, useEffect } from 'react'
import image from '../assets/gallery/image_67193857.JPG';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const images = [{ src: image }, { src: image }, { src: image }, { src: image }];

function Testimonials({ }) {


    const [dynamicImages, setDynamicImages] = useState([]);

    useEffect(() => {
        setDynamicImages(images);
        return () => { };
    }, [setDynamicImages, images]);

    return (
        <>
            <div class="grid grid-cols-5 gap-4 mb-40">
                <div className='col-span-3 col-start-2'>
                    <div className='testimonial-slide'>
                        <Carousel
                            className='framed-carousel'
                            images={dynamicImages}
                            index={2}
                            isMaximized={false}
                            hasSizeButton={false}
                            hasMediaButton={false}
                            hasIndexBoard={false}
                            hasLeftButton={false}
                            hasRightButton={false}
                            hasCaptionsAtMax='top'
                            hasDotButtonsAtMax='bottom'
                            hasThumbnails={true}
                            hasThumbnailsAtMax={true}
                            thumbnailWidth={'15%'}
                            thumbnailHeight={'15%'}
                            shouldMaximizeOnClick={true}
                            shouldMinimizeOnClick={true}
                            activeIcon={
                                <span className='icon-text' role='img' aria-label='active'>
                                    🔳
                                </span>
                            }
                            passiveIcon={
                                <span className='icon-text' role='img' aria-label='passive'>
                                    🔲
                                </span>
                            }
                        />
                    </div>


                </div>
            </div>
        </>
    );
}

export default Testimonials;