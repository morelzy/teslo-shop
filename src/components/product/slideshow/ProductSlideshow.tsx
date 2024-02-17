'use client';

import type { Swiper as SwiperObject } from 'swiper';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { ProductImage } from '../product-image/ProductImage';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export function ProductSlideshow({ images, title, className }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={className}>
      <Swiper
        navigation
        autoplay={{
          delay: 2500,
        }}
        className="mySwiper2"
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <ProductImage
              alt={title}
              className="rounded-lg object-fill"
              height={800}
              src={image}
              width={1024}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        freeMode
        watchSlidesProgress
        className="mySwiper"
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerView={4}
        spaceBetween={10}
        onSwiper={setThumbsSwiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <ProductImage
              alt={title}
              className="rounded-lg object-fill"
              height={300}
              src={image}
              width={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
