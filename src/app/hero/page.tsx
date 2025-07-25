
'use client'
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import Aos from 'aos'
import 'aos/dist/aos.css'
const HeroPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    console.log(plugin);

    const carousel_data = [
        {
            image: '/images/hero-image1.png',
            bg: '/images/hero-bg1.png',
            text: '/images/hero-text1.png',
            outline: '/images/hero-outline1.png'
        },
        {
            image: '/images/hero-image2.png',
            bg: '/images/hero-bg2.png',
            text: '/images/hero-text2.png',
            outline: '/images/hero-outline2.png'
        },
        {
            image: '/images/hero-image3.png',
            bg: '/images/hero-bg3.png',
            text: '/images/hero-text3.png',
            outline: '/images/hero-outline3.png'
        },
    ];

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: false,
        });
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            Aos.refresh();
        }, 500);
        return () => clearInterval(interval);
    }, []);
    console.log(currentIndex);
    return (
        <div className='w-full lg:h-screen md:h-[80vh] sm:h-[60vh] h-[40vh] flex justify-center items-center'>
            <Carousel
                plugins={[plugin.current]}
                onTransitionEnd={() => {
                    setCurrentIndex(prev => (prev + 1) % carousel_data.length);
                    Aos.refresh();
                }}
                className="w-full overflow-hidden  lg:h-screen md:h-[80vh] sm:h-[60vh] h-[40vh]">
                <CarouselContent className='w-full lg:h-screen md:h-[80vh] sm:h-[60vh] h-[40vh]'>
                    {carousel_data.map((data, index) => (
                        <CarouselItem key={index} className='w-full h-full' >
                            <div className='w-full h-full bg-cover bg-no-repeat relative bg-center' style={{ backgroundImage: `url(${data.bg})` }}>
                                <div className="w-full h-full flex justify-center items-center" >
                                    <Image data-aos={index === currentIndex ? "fade-right" : ""} src={data.text} alt='text' width={300} height={300} className='w-[85%]' />
                                    <Image src={data.image} alt='image' width={300} height={300} className='w-full lg:block hidden absolute' />
                                    <Image data-aos={index === currentIndex ? "fade-right" : ""} src={data.outline} alt='outline' width={300} height={300} className='w-[85.4%] absolute' />

                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious />
      <CarouselNext /> */}
            </Carousel>

        </div>
    )
}

export default HeroPage
