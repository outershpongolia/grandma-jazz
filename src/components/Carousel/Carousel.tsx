import React from 'react'
import styles from './Carousel.module.scss'
import { StaticImageData } from 'next/image'
import Slider, { Settings } from "react-slick"
import Image from 'next/image'

interface CarouselProps {
  images: StaticImageData[]
  settings: Settings
}

export const Carousel: React.FC<CarouselProps> = ({ images, settings }) => {
  return (
    <div className={styles.carousel}>
      <Slider
        className={styles.carousel__track}
        dots={false}
        infinite={true}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={0}
        speed={4000}
        cssEase="linear"
        {...settings}
      >
        {images.map(image => {
          return (
            <Image
              className={styles.carousel__image}
              key={image as unknown as string}
              src={image}
              alt='Grandma showing her marijuana plants in backyard of the Thai house'
            />
          )
        })}
      </Slider>
    </div>
  )
}