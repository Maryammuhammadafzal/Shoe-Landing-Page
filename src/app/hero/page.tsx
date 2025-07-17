import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const HeroPage = () => {
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
    ]
    return (
        <div className='w-full h-screen flex justify-center items-center'>

            <Carousel className="w-full overflow-hidden  h-screen">
                <CarouselContent className='w-full h-screen'>
                    {carousel_data.map((data, index) => (
                        <CarouselItem key={index} className='w-full h-full' >
                            <div className='w-full h-full bg-cover bg-no-repeat relative bg-center' style={{ backgroundImage: `url(${data.bg})` }}>
                                {/* <Image src='/images/hero-bg1.png' alt='image' width={300} height={300} className='w-full h-full object-cover object-top' /> */}
                                <div className="w-full h-full flex justify-center items-center" >
                                    <Image src={data.text} alt='text' width={300} height={300} className='w-[85%]' />
                                    <Image src={data.image} alt='text' width={300} height={300} className='w-full absolute' />
                                    <Image src={data.outline} alt='text' width={300} height={300} className='w-[85.4%] absolute' />
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
