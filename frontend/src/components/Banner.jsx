import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css'

const Banner = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        },

    }

    return (
        <div className='w-full h-full md-lg:mt-6'>
            <div className='w-[100%] lg:w-[100%] mx-auto'>
                <div className='w-full flex flex-wrap md-lg:gap-8'>
                    <div className='w-full'>
                        <div className='my-2'>
                            <Carousel
                                autoPlay={true}
                                infinite={true}
                                arrows={true}
                                responsive={responsive}
                            >
                            {
                                [1, 2, 3, 4].map((img, i) => <Link key ={i} to='#'>
                                    <img src={`/Images/banner/${img}.png`} alt="" />
                                </Link> )
                            }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;