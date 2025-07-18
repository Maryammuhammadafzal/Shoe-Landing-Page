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

          <div className='relative w-full md:min-h-[650px] min-h-[800px] flex justify-center items-center flex-wrap gap-6 md:flex-nowrap'>
            {featured_data.map((feature, index) => (
              <div
                key={index}
                onClick={() => setIsActive(index)}
                className={`
                  transition-all duration-500 ease-in-out cursor-pointer
                  bg-white drop-shadow-xl rounded-2xl overflow-hidden
                  flex flex-col md:flex-row
                  w-full xs:max-w-[90%] sm:max-w-[70%] md:max-w-[650px] lg:w-[835px] md:w-[750px] lg:h-[636px] md:h-[580px] h-auto
                  ${isActive === index ? 'scale-100 z-30' : 'scale-95 z-10'}
                  ${index === 0 ? 'absolute xl:left-[5%] lg:left-0 md:-left-8 md:top-0 top-0' : index === 1 ? 'absolute xl:left-[27%] lg:left-[15%] md:left-[5%]  md:top-0 top-[15%]' : 'absolute xl:left-[49%] lg:left-[30%] md:left-[13%] md:top-0 top-[30%]'}
                `}
              >

                <div className='w-full md:w-1/2 xs:min-w-[320px] max-w-[280px] max-md:max-h-[250px] md:h-full flex justify-center items-center xs:gap-10 md:flex-col flex-row px-6 py-8'>
                  <div className='flex flex-col md:max-w-[300px] xs:max-w-[200px] max-w-[120px] justify-center md:items-center gap-4'>
                    <h2 className='xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl text-lg font-sans uppercase'>
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
                  <div className='min-h-[150px] max-md:w-[150px] msx-xs:max-w-[120px]'>
                    <Image
                      src={feature.logo}
                      alt='client-logo'
                      width={280}
                      height={140}
                      className={`${isActive === index ? 'block' : 'hidden'} mx-auto`}
                    />
                  </div>
                </div>

                <div className='w-full md:w-1/2 h-[300px] md:h-full flex justify-center items-center'>
                  <Image
                    src={feature.image}
                    alt='feature-image'
                    width={100}
                    height={100}
                    className='w-full h-full object-cover rounded-none md:rounded-tr-3xl md:rounded-br-3xl'
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
