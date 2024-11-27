'use client'
import React, { useState } from 'react'
import { useSwiper } from 'swiper/react'
function Pagination() {
  const swiper = useSwiper()
  const [swiperIndex, setSwiperIndex] = useState(0)
  const totalSlides = swiper.slides.length
  const barLength = `${100 / totalSlides}%`
  const translateX = `${(100 / totalSlides) * swiperIndex}%`;
  swiper.on('slideChange', function () {
    setSwiperIndex(swiper.activeIndex)
  })
  return (
    <div className='w-full flex-1'>
      <div className='flex h-[3px] bg-primary/30'>
        <div
          style={{
            width: barLength, // Fixed width for each segment
            // transform: `translateX(${translateX})`, // Move the bar based on the current slide
            marginLeft: translateX,
            transition: 'all .5s'
          }}
          className={`bg-primary`}>

        </div>
      </div>

    </div>
  )
}

export default Pagination