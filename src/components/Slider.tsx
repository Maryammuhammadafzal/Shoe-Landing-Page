import { Sparkle } from 'lucide-react'
import React from 'react'

const Slider = () => {
  return (
   <div className="w-full h-auto my-20 relative">
  <div className="overflow-hidden rotate-6 bg-black text-white">
    <div className="flex items-center whitespace-nowrap animate-marquee gap-12 py-6">
      {[...Array(8)].map((_, i) => (
        <h3 key={i} className="flex gap-12 font-bold font-sans uppercase text-5xl items-center">
          Elegance <Sparkle size={38} />
          Style <Sparkle size={38} />
          Power <Sparkle size={38} />
          Fearless <Sparkle size={38} />
        </h3>
      ))}
    </div>
  </div>
  <div className="overflow-hidden -z-10 -rotate-3 absolute font-sans top-0 left-0 bg-[#525963] right-0 text-white">
    <div className="flex items-center whitespace-nowrap animate-marquee-left gap-12 py-6">
      {[...Array(8)].map((_, i) => (
        <h3 key={i} className="flex gap-12 font-bold uppercase text-5xl items-center">
           Freedom <Sparkle size={38} />
          Unstoppable <Sparkle size={38} />
          Limitless <Sparkle size={38} />
          Power <Sparkle size={38} />
        </h3>
      ))}
    </div>
  </div>
</div>
  )
}

export default Slider