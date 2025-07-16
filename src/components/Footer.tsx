import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-auto '>
      <Image src='/images/footer-image.png' alt='shoes-logo' width={300} height={300} className='w-full h-auto' />
    </div>
  )
}

export default Footer
