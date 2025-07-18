'use client'
import { MenuIcon, Sparkle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const nav_data = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Feature',
            link: '/featured'
        },
        {
            name: 'Shop',
            link: '/shop'
        },
        {
            name: 'Contact Us',
            link: '/contact'
        },
    ]
    return (
        <div className={`sticky bg-white shadow-sm top-0 left-0 z-50 w-full h-[150px] flex flex-col gap-6 justify-center items-center`}>
            <div className='lg:w-[90%] w-full flex justify-betwwen items-center lg:px-0 md:px-2 px-4 h-auto'>
                <div className='md:w-1/3 md:flex hidden items-center gap-3 lg:text-base text-sm '>
                    <p className='font-mono'>Get 50% off on your first order</p>
                    <Sparkle />
                </div>
                <div className='md:w-1/3  w-1/2 flex justify-center items-center '>
                    <Image src='/images/logo.png' alt='logo' width={130} height={50} />
                </div>
                <div className='md:w-1/3 w-1/2 flex justify-end items-center '>
                    <ul className='md:flex hidden xl:gap-10 lg:gap-8 max-[900px]:gap-6 gap-3 items-center font-mono lg:text-base text-sm'>
                        {nav_data.map((data, index) => (
                            <li key={index} className='hover:font-medium'>
                                <Link href={data.link}>{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <MenuIcon color='black' className='md:hidden block' />
                </div>
            </div>
            <div className='w-full md:hidden flex items-center justify-center gap-3 lg:text-base text-sm '>
                <p className='font-mono'>Get 50% off on your first order</p>
                <Sparkle />
            </div>
        </div>
    )
}

export default Header
