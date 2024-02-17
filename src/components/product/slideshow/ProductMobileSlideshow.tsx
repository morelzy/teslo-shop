'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export function ProductMobileSlideshow({ images, title, className }: Props) {
  return (
    <div className={className}>
      <Swiper
        pagination
        autoplay={{
          delay: 2500,
        }}
        className="mySwiper2"
        modules={[FreeMode, Autoplay, Pagination]}
        style={{
          width: '100vw',
          height: '500px',
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              alt={title}
              className="object-fill"
              height={500}
              src={`/products/${image}`}
              width={600}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
