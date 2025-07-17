'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const FeaturedPage = () => {
  const [isActive, setIsActive] = useState(2)

  const featured_data = [
    {
      image: '/images/featured-image1.png',
      logo: '/images/shop-image.png',
      title: 'Urban Classics',
      description: 'Modern designs with timeless appeal for everyday wear.'
    },
    {
      image: '/images/featured-image1.png',
      logo: '/images/shop-image.png',
      title: 'Urban Streetwear',
      description: 'Edgy pieces that define your presence.'
    },
    {
      image: '/images/featured-image1.png',
      logo: '/images/shop-image.png',
      title: 'Urban Luxury',
      description: 'Elevated essentials for modern living.'
    }
  ]

  return (
    <div className='w-full h-auto flex justify-center lg:py-20 md:py-14 sm:py-10 py-6 items-center'>
      <div className='lg:w-[85%] w-full lg:px-0 px-4 flex-col lg:gap-20 md:gap-14 sm:gap-9 gap-6 h-auto flex justify-center items-center'>
        <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>
          Featured Collections
        </h2>

        <div className='w-full flex flex-col justify-center items-center gap-16 h-auto'>
          {/* Responsive container */}
          <div className='relative w-full min-h-[650px] flex justify-center items-center flex-wrap gap-6 lg:flex-nowrap'>
            {featured_data.map((feature, index) => (
              <div
                key={index}
                onClick={() => setIsActive(index)}
                className={`
                  transition-all duration-500 ease-in-out cursor-pointer
                  bg-white drop-shadow-xl rounded-2xl overflow-hidden
                  flex flex-col lg:flex-row
                  w-full sm:max-w-[90%] md:max-w-[650px] lg:w-[835px] lg:h-[636px]
                  relative
                  ${isActive === index ? 'scale-100 z-30' : 'scale-95 z-10'}
                  ${index === 0 ? 'lg:absolute lg:left-[5%]' : index === 1 ? 'lg:absolute lg:left-[27%]' : 'lg:absolute lg:left-[49%]'}
                `}
              >
                {/* Content section */}
                <div className='w-full lg:w-1/2 min-w-[320px] h-auto lg:h-full flex justify-center items-center gap-10 flex-col px-6 py-8'>
                  <div className='flex flex-col max-w-[300px] justify-center items-center gap-4'>
                    <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>
                      {feature.title}
                    </h2>
                    <p className='md:text-base sm:text-sm text-xs font-mono'>
                      {feature.description}
                    </p>
                    <div className='w-full'>
                      <Button className='px-8 py-6 text-lg bg-transparent border flex gap-3 items-center border-primary text-primary rounded-none'>
                        Get Started <ArrowRight />
                      </Button>
                    </div>
                  </div>
                  <div className='min-h-[150px]'>
                    <Image
                      src={feature.logo}
                      alt='client-logo'
                      width={280}
                      height={140}
                      className={`${isActive === index ? 'block' : 'hidden'} mx-auto`}
                    />
                  </div>
                </div>

                {/* Image section */}
                <div className='w-full lg:w-1/2 h-[300px] lg:h-full flex justify-center items-center'>
                  <Image
                    src={feature.image}
                    alt='feature-image'
                    width={100}
                    height={100}
                    className='w-full h-full object-cover rounded-none lg:rounded-tr-3xl lg:rounded-br-3xl'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPage
