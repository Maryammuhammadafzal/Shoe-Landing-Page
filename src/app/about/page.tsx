'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const AboutPage = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='min-h-screen w-full'>

            <div className='w-full md:h-[200vh] sm:h-[170vh] xs:h-[140vh] h-[120vh] flex justify-center items-center'>
                {/* Sticky Section */}
                <div className='sticky top-0 w-full h-screen flex justify-center items-center bg-white overflow-hidden'>
                    <div className='lg:w-[85%] w-full h-full relative px-4 flex flex-col items-center justify-center'>
                        <h2
                            style={{
                                transform: `${offset > 200 && offset < 300 && '-translateY(600px)'}`,
                            }}
                            className='z-10 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase max-w-4xl text-center'>
                            Step Into Your Style. Own Every Move.
                        </h2>

                        {/* First Image */}
                        <Image
                            src='/images/about-image1.png'
                            alt='image1'
                            width={280}
                            height={140}
                            className={`absolute xs:right-10 right-0 z-40 md:w-[400px] md:h-[600px] sm:w-[300px] sm:h-[500px] w-[200px] h-[400px] transition-transform duration-300 ease-out`}
                            style={{
                                transform: `translateY(${Math.max(0, 500 - offset * 1)}px)`,
                            }}
                        />

                        {/* Second Image */}
                        <Image
                            src='/images/about-image2.png'
                            alt='image2'
                            width={280}
                            height={140}
                            className={`absolute xs:left-10 left-0 z-40 md:w-[400px] md:h-[600px] sm:w-[300px] sm:h-[500px] w-[200px] h-[400px] transition-transform duration-300 ease-out`}
                            style={{
                                transform: `translateY(${Math.max(0, 600 - offset * 0.5)}px)`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
