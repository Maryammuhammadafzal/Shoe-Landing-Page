import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ShopPage = () => {

    const shop_data = [
        {
            image1: '/images/shop-image1.png',
            image2: '/images/shop-image2.png',
            title: 'Blackout Edition',
            price: 'Price: $129.99'
        },
        {
            image1: '/images/shop-image3.png',
            image2: '/images/shop-image4.png',
            title: 'Blackout Edition',
            price: 'Price: $129.99'
        },
        {
            image1: '/images/shop-image5.png',
            image2: '/images/shop-image6.png',
            title: 'Blackout Edition',
            price: 'Price: $129.99'
        },
    ]
    return (
        <div className='w-full h-auto flex justify-center lg:py-20 md:py-14 sm:py-10 py-6 items-center'>
            <div className='lg:w-[85%] w-full lg:px-0 px-4 flex-col lg:gap-20 md:gap-14 sm:gap-9 gap-6 h-auto flex justify-center items-center'>
                <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>Shop Your Favourite</h2>

                <div className='w-full flex flex-col justify-center items-center gap-16 h-auto '>
                    {
                        shop_data.map((shop, index) => (
                            <div key={index} className='w-full grid relative grid-cols-12 justify-between items-center gap-3 '>

                                <div className='sm:col-span-5 col-span-12 w-full h-auto'>
                                    <div className='w-full h-auto flex flex-col gap-5'>
                                        <Image src={shop.image1} alt='client-image' width={100} height={100} className='w-full h-[280px] ' />
                                        <div className='heading flex flex-col gap-1'>
                                            <h3 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-sans'>{shop.title}</h3>
                                            <p className='font-mono font-medium lg:text-2xl md:text-xl sm:text-lg text-base text-[#0AB92A]'>{shop.price}</p>
                                        </div>
                                        <div className="h-auto w-full lg:py-3 py-1  flex justify-end">
                                            <Button className='px-6 py-4 text-base bg-transparent border border-primary text-primary rounded-none'>Add To Cart</Button>
                                        </div>
                                    </div>
                                </div>

                                <div className='sm:col-span-2 sm:block hidden w-full h-auto'>
                                    <Image src='/images/shop-image.png' alt='client-image' width={280} height={150} className=' absolute lg:left-[36%] md:left-[32%] left-[28%] top-[20%] -z-10' />
                                </div>
                                <div className='sm:col-span-5 col-span-12 w-full h-auto'>
                                    <div className='w-full h-auto flex flex-col gap-5'>
                                        <Image src={shop.image2} alt='client-image' width={100} height={100} className='w-full h-[280px] ' />
                                        <div className='heading flex flex-col gap-1'>
                                            <h3 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-sans'>{shop.title}</h3>
                                            <p className='font-mono font-medium lg:text-2xl md:text-xl sm:text-lg text-base text-[#0AB92A]'>{shop.price}</p>
                                        </div>
                                        <div className="h-auto w-full lg:py-3 py-1 flex justify-end">
                                            <Button className='px-6 py-4 text-base bg-transparent border border-primary text-primary rounded-none'>Add To Cart</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopPage
