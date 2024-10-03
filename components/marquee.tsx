import clsx from 'clsx'
import React, { Dispatch, SetStateAction } from 'react'
import Marquee from 'react-fast-marquee'

const MarqueeItem = ({item, direction, onClick, i}: {item: string, direction: string,i: number, onClick: Dispatch<SetStateAction<number>>}) => {
  return (
    <Marquee speed={20} direction={direction as 'left' | 'right' | 'up' | 'down'} className='group overflow-hidden'>
        <div onClick={(e)=>onClick(i + 1)} className="flex gap-2 w-full whitespace-nowrap items-center text-2xl md:text-4xl px-2 group cursor-pointer overflow-hidden">
          {[...new Array(16)].map((rep, i)=><p key={i} className={'flex gap-2'}><span className={'group-hover:text-red transition-colors'}>{item}</span><span className='mt-1'>{'•'}</span></p>)}
        </div>
      </Marquee>
  )
}

export default MarqueeItem