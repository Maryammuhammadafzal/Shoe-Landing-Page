import { Button } from '@/components/ui/button'
import React from 'react'

const BannerPage = () => {
    return (
        <div className='w-full h-auto min-h-[670px] relative my-10 flex bg-center bg-cover' style={{ backgroundImage: `url('/images/banner-image.png')` }}>
            <div className="overlay w-full h-full bg-black/20 absolute top-0 left-0 ">
                <div className='w-full h-full flex justify-end items-end xl:pr-20 lg:pr-10 sm:pr-6 px-3 xl:py-14 lg:pb-10 pb-6'>
                    <div className='flex flex-col max-w-sm gap-4 text-white'>
                        <h2 className='xl:text-5xl xl:leading-16 lg:leading-12 md:leading-10 leading-7 lg:text-4xl sm:text-3xl  xs:text-2xl text-xl font-sans uppercase'>Ready to redefine your walk?</h2>
                    <p className='lg:text-xl md:text-lg  sm:text-base xs:text-sm text-xs font-mono lg:max-w-md md:max-w-xs sm:max-w-2xs xs:max-w-[200px] w-full'>
                        Browse our latest arrivals and find the pair that speaks to you.
                    </p>
                    <div className="h-auto w-auto">
                      <Button className='px-10 py-8 text-lg bg-transparent border border-white rounded-none'>Shop Our Collection</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerPage
