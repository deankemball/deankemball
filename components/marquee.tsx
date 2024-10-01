import clsx from 'clsx'
import React from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeItem = ({item, direction}: {item: string, direction: string}) => {
  return (
    <Marquee  speed={20} direction={direction as 'left' | 'right' | 'up' | 'down'} className='group overflow-hidden'>
        <div className="flex gap-2 w-full whitespace-nowrap items-center text-2xl md:text-4xl px-2 group cursor-pointer overflow-hidden">
          {[...new Array(16)].map((rep, i)=><p key={i} className={'flex gap-2'}><span className={'group-hover:text-red transition-colors'}>{item}</span><span className='mt-1'>{'•'}</span></p>)}
        </div>
      </Marquee>
  )
}

export default MarqueeItem