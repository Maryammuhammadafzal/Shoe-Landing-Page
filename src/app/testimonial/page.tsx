import Image from 'next/image'
import React from 'react'

const TestimonialPage = () => {

    const testimonial_data = [
        {
            testimonial: '"The most comfortable sneakers I’ve ever worn. I get compliments every day!"',
            name: 'Sarah L.',
            image: '/images/client-image1.png',
        },
        {
            testimonial: '"These shoes really gave me confidence. the perfect mix of style and support."',
            name: 'James P.',
            image: '/images/client-image2.png',
        },
        {
            testimonial: 'I’ve never felt so free and light on my feet. Love the quality too!"',
            name: 'Ayesha M.',
            image: '/images/client-image3.png',
        },
    ]

    return (
        <div className='w-full h-auto flex justify-center lg:py-20 md:py-14 sm:py-10 py-6 items-center'>
            <div className='lg:w-[85%] w-full lg:px-0 px-4 flex-col lg:gap-20 md:gap-14 sm:gap-9 gap-6 h-auto flex justify-center items-center'>
                <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>Customer Testimonials</h2>

                <div className='w-full flex flex-col justify-center items-center gap-16 h-auto '>
                    {
                        testimonial_data.map((testimonial, index) => (
                            <div key={index} className='flex w-full flex-row justify-between group items-center gap-3'>
                                <p className='lg:text-xl md:text-lg  sm:text-base xs:text-sm text-xs font-mono lg:max-w-md md:max-w-xs sm:max-w-2xs xs:max-w-[200px] w-full'>
                                    {`${testimonial.testimonial}`}
                                </p>
                                <div className='max-w-xs min-w-xs relative flex h-auto  justify-center items-center'>
                                    <hr className='w-full  border-2 border-black' />
                                    <div className='rounded-full group-hover:translate-x-75 duration-500 transition-transform absolute h-[100px] w-[100px]'>
                                        <Image src={testimonial.image} alt='client-image' width={100} height={100} className='w-full h-full object-cover rounded-full' />
                                    </div>
                                </div>
                                <p className='font-mono text-2xl'>{testimonial.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TestimonialPage
