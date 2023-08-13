import React from 'react'
import styles from './FlowersSection.module.scss'
import Image from 'next/image'

import grandmaImage from '../../../public/images/grandma1.jpeg'
import grandmaImage2 from '../../../public/images/grandma2.jpeg'
import grandmaImage3 from '../../../public/images/jump.jpeg'
import grandmaImage4 from '../../../public/images/grandma3.png'

interface IFlowersSectionProps {}

export const FlowersSection: React.FC<IFlowersSectionProps> = () => {
  return (
    <div className={styles.flowersSection}>
      <div className={styles.flowersSection__container}>
        <div className={styles['flowersSection__image-wrapper']}>
          <Image
            className={styles.flowersSection__image}
            src={grandmaImage4}
            alt='Old grandma showing her marijuana plants.'
          />
        </div>

        <div className={styles.flowersSection__textWrapper}>
          <div className='text__subtitle'>Premium quality flowers.</div>

          <div className='text__normal'>
            Come and experience the finest quality organic cannabis on the island, always sourced from local farmers in Thailand.
          </div>

          <div className='text__normal'>
            Elevate your cannabis experience with each pristine bud, handpicked and delicately cultivated to deliver the utmost quality and flavor.
          </div>
        </div>
      </div>

      <div className={styles.flowersSection__container}>
        <div className={styles['flowersSection__image-wrapper']}>
          <Image
            className={styles.flowersSection__image}
            src={grandmaImage2}
            alt='Old grandma with a hat showing her marijuana plants.'
          />
        </div>

        <div className={styles['flowersSection__image-wrapper']}>
          <Image
            className={styles.flowersSection__image}
            src={grandmaImage3}
            alt='Old grandma jumping in her backyard'
          />
        </div>

        <div className={styles['flowersSection__image-wrapper']}>
          <Image
            className={styles.flowersSection__image}
            src={grandmaImage}
            alt='Old grandma with sunglasses showing her green marijuana plants.'
          />
        </div>
      </div>
    </div>
  )
}