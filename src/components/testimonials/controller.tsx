'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { useSwiper } from 'swiper/react';

function Controller() {
  const [disabledNext, setDisabledNext] = useState(false)
  const [disabledPrev, setDisabledPrev] = useState(true)
  const swiper = useSwiper();
  swiper.on('init', function () {
    if (swiper.isEnd) setDisabledNext(true)
    else setDisabledNext(false)

    if (swiper.isBeginning) setDisabledPrev(true)
    else setDisabledPrev(false)
  })
  swiper.on('slideChange', function () {
    if (swiper.isEnd) setDisabledNext(true)
    else setDisabledNext(false)
    if (swiper.isBeginning) setDisabledPrev(true)
    else setDisabledPrev(false)
  });
  return (
    <div className='flex gap-2 items-center'>
      <button aria-label='previous slide' onClick={() => swiper.slidePrev()} className={`flex items-center justify-center p-2 rounded-full border border-primary ${disabledPrev && 'opacity-50 cursor-default'}`}>
        <ArrowLeft />
      </button>
      <button aria-label='next slide' onClick={() => swiper.slideNext()} className={`flex items-center justify-center p-2 rounded-full border border-primary ${disabledNext && 'opacity-50 cursor-default'}`}>
        <ArrowRight />
      </button>
    </div>
  )
}

export default Controller
