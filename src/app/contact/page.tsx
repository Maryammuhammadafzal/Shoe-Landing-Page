import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SendHorizonal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6'

const ContactPage = () => {
    return (
        <div className='w-full h-auto justify-center lg:pt-20 md:pt-16 sm:pt-10 pt-6 items-center flex'>
            <div className='2xl:w-[85%] w-[95%] h-auto flex flex-col md:gap-20 sm:gap-16 gap-10'>
                {/* Contact details */}
                <div className='flex justify-between w-full xs:flex-row flex-col gap-6 h-auto'>
                    <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>Get In touch</h2>
                    <p className='lg:text-xl md:text-lg  sm:text-base xs:text-sm text-xs font-mono lg:max-w-md md:max-w-xs sm:max-w-2xs xs:max-w-[200px] w-full'>
                        We craft sneakers that merge innovative design, premium materials, and unmatched comfort to help you move boldly through life.
                    </p>
                    <div className="flex md:gap-6 gap-3 max-lg:flex-wrap lg:text-[35px] md:text-[28px] sm:text-[24px] text-[20px] h-auto py-1">
                        <FaFacebook />
                        <FaXTwitter />
                        <FaSquareInstagram />
                        <FaLinkedin />
                        <FaWhatsapp />

                    </div>
                </div>
                {/* Newsletter */}
                <div className='flex justify-between gap-6 w-full xs:flex-row flex-col h-auto'>
                    <div className=' xs:w-1/2 w-full flex h-auto xs:order-1 order-2'>
                        <Input type='email' id='email' name='email' placeholder='Enter Your Email' className='lg:h-[64px] md:h-[56px] h-[48px] text-base rounded-none lg:min-w-md' />
                        <Button className='lg:h-[64px] md:h-[56px] h-[48px] rounded-none px-8 w-[60px]'><SendHorizonal className='' /></Button>
                    </div>
                    <div className='xs:w-1/2 w-full flex flex-col h-auto xs:order-2 order-1'>
                        <h2 className='xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg font-sans uppercase'>Subscribe Newsletter</h2>
                        <p className='lg:text-xl md:text-lg sm:text-base xs:text-sm text-xs font-mono max-w-3xl'>
                            We craft sneakers that merge innovative design, premium materials, and unmatched comfort to help you move boldly through life.
                        </p>
                    </div>
                </div>
                {/* CopyRight*/}
                <div className='flex  w-full h-auto'>
                    <p className='md:text-base text-center sm:text-sm text-xs'>
                        © 2021 all copyright reserved. All Rights Reserved. <Link target="_blank" href='https://rootletsolutions.com/' className='underline'> Rootlet Solution</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ContactPage
