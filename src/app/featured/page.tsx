import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const FeaturedPage = () => {
    return (
        <div className='w-full h-auto flex justify-center lg:py-20 md:py-14 sm:py-10 py-6 items-center'>
            <div className='lg:w-[85%] w-full lg:px-0 px-4 flex-col lg:gap-20 md:gap-14 sm:gap-9 gap-6 h-auto flex justify-center items-center'>
                <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>Featured Collections</h2>

                <div className='w-full flex flex-col justify-center items-center gap-16 h-auto '>
                    <div className='relative w-full h-auto'>
                        <div className='flex w-[835px] h-[636px] rounded-2xl bg-white drop-shadow-lg'>
                            <div className='content w-1/2 h-full p-3 flex justify-center items-center gap-10 flex-col'>
                                <div className='flex flex-col w-auto h-auto gap-4'>
                                    <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>Urban Classics</h2>
                                    <p className='md:text-base sm:text-sm text-xs font-mono lg:max-w-md md:max-w-xs sm:max-w-2xs xs:max-w-[200px] w-full'>
                                        Modern designs with timeless appeal for everyday wear.
                                    </p>
                                    <div className="h-auto w-full lg:py-3 py-1 flex justify-end">
                                        <Button className='px-6 py-4 text-base bg-transparent border border-primary text-primary rounded-none'>Add To Cart</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='content w-1/2 h-full flex justify-center items-center '>
                                <Image src='/images/featured-image1' alt='client-image' width={100} height={100} className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPage
