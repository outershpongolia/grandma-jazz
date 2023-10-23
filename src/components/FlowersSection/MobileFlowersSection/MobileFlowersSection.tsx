import React from 'react'
import styles from './MobileFlowersSection.module.scss'
import sectionStyles from '../FlowersSection.module.scss'
import clsx from 'clsx'
import { Carousel } from '@/components/Carousel/Carousel'
import { Settings } from 'react-slick'

// Images
import grandmaImage from '../../../../public/images/grandma1.jpeg'
import grandmaImage2 from '../../../../public/images/grandma2.jpeg'
import grandmaImage3 from '../../../../public/images/jump.jpeg'
import grandmaImage4 from '../../../../public/images/grandma3.png'

interface IMobileFlowersSectionProps {}

const images = [
    grandmaImage,
    grandmaImage2,
    grandmaImage3,
    grandmaImage4
]

const carouselSettings: Settings = {
  slidesToShow: 3.2,
  responsive: [
    {
      breakpoint: 856,
      settings: {
        slidesToShow: 2.8
      }
    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.8
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1.2
      }
    }
  ]
}

export const MobileFlowersSection: React.FC<IMobileFlowersSectionProps> = () => {
    return (
        <div className={styles.mobileFlowersSection}>
            <div className={clsx(styles.mobileFlowersSection__textWrapper, sectionStyles.flowersSection__textWrapper)}>
                <div className='text__subtitle'>premium quality flowers.</div>

                <div className={clsx(styles.mobileFlowersSection__text, 'text__normal')}>
                    Come and experience the finest quality organic cannabis on the island, always sourced from local farmers in Thailand.
                </div>

                <div className={clsx(styles.mobileFlowersSection__text, 'text__normal')}>
                    Elevate your cannabis experience with each pristine bud, handpicked and delicately cultivated to deliver the utmost quality and flavor.
                </div>
            </div>

            <Carousel images={images} settings={carouselSettings} />
        </div>
    )
}