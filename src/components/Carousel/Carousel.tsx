import React, { useCallback, useEffect, useState } from 'react'
import styles from './Carousel.module.scss'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import clsx from 'clsx'
import { uniqueId } from 'lodash'
import { Button } from '../Button/Button'
import { BiRightArrow } from 'react-icons/bi'

interface CarouselProps {
  images: StaticImageData[]
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [ isSmallScreen, setIsSmallScreen ] = useState(false)

  useEffect(() => {
    if (window) {
      const smallScreen = matchMedia('(max-width: 640px)')

      setIsSmallScreen(smallScreen.matches)
    }
  }, [setIsSmallScreen])

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
  }, [setCurrentImageIndex])

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
  }, [setCurrentImageIndex])

  return (
    <div className={styles.carousel__container}>
      <div className={styles.carousel} style={{ transform: `translateX(-${currentImageIndex * (window.innerWidth > 767 ? 52 : 102)}%)` }}>
        {images.map((image, index) => (
          <div
            key={uniqueId(index.toString())}
            className={styles.carousel__slide}
          >
            <Image
                className={styles.carousel__image}
                src={image}
                alt='Grandma showing her marijuana plants in the backyard of her house in Thailand.'
            />
          </div>
        ))}
      </div>

      <Button
        className={clsx(styles.carousel__button, styles.carousel__button_prev)}
        label={<BiRightArrow className={clsx(styles.carousel__icon, styles.carousel__icon_left)} />}
        onClick={handlePrevImage}
        isDisabled={currentImageIndex === 0}
        version='icon'
      />

      <Button
        className={clsx(styles.carousel__button, styles.carousel__button_next)}
        label={<BiRightArrow className={styles.carousel__icon} />}
        onClick={handleNextImage}
        isDisabled={
          (currentImageIndex === images.length - 1 && isSmallScreen)
          || (currentImageIndex >= (images.length / 2) && !isSmallScreen)
        }
        version='icon'
      />
    </div>
  )
}