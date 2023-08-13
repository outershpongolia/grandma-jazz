'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import styles from './page.module.scss'
import { Section } from '@/components/Section/Section'
import { Button } from '@/components/Button/Button'
import { useRouter } from 'next/navigation'
import { ERoute } from '@/constants'
import { GoogleMapSection } from '@/components/GoogleMapSection/GoogleMapSection'
import { NextPage } from 'next'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import Image from 'next/image'

// Images
import headerImage from '../../public/images/example1.jpeg'
import introImage from '../../public/images/norm.jpeg'
import flowersImage from '../../public/images/flowers.jpg'
import vibeImage from '../../public/images/vibe.jpeg'
import refreshmentsLogo from '../../public/images/logo-1.jpeg'
import clsx from 'clsx'

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  const router = useRouter()

  const handleNavigateToPage = useCallback((route: ERoute) => {
      return () => router.push(route)
  }, [router.push])

  return (
    <div className={styles.home}>
      <PageHeader
        image={headerImage}
        imageDescription='Cannabis flower'
        title='Grandma Jazz'
        text='local organic café'
      />

      <div className={styles.home__gradient}>
        <Section
          title="It's in the details"
          text="As you enter the doors of Grandma Jazz, you are instantly kissed with jazz music, Havana hats and a respect for the easy vibes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={introImage}
          imageDescription="Man with a hat"
          name="intro"
        />

        <div className={styles.horizontalLine} />

        <Section
          title="premium quality flowers"
          text="Come and experience the finest quality organic cannabis on the island, always sourced from local farmers in Thailand."
          image={flowersImage}
          imageDescription="Marijuana buds in a gift box"
          name="flowers"
          hasButton
          onClick={handleNavigateToPage(ERoute.FLOWERS)}
        />

        <div className={styles.horizontalLine} />

        <Section
          title="get high with rapeeporn"
          text="Wide, open mountains surround the cafe, bringing calm & ease for good conversation. Rest, with friends or working from a laptop, we've considered your privacy, while you enjoy the little things."
          image={vibeImage}
          imageDescription="Girl is sitting on the balcony, smoking cigarrete and enjoying the view of the jungle"
          name="vibe"
          hasButton
          onClick={handleNavigateToPage(ERoute.VIBE)}
        />
      </div>

      <div className='white-section'>
        <div className='white-section__container'>
          <div className={styles['home__container-symbol']}>
            <Image
              className={styles['home__container-image']}
              src={refreshmentsLogo}
              alt='Two people sitting in a cafe, drinking tea, smoking and talking logo'
            />
          </div>

          <div className={clsx(styles.home__text, 'text__normal text__normal_white')}>
            With a small menu of hand-crafted / local refreshments, at Grandma Jazz it's all about the experience.
            Savor the artistry of our beverages and delectable sweets, each lovingly made to create an unforgettable taste sensation,
            making every visit to Grandma Jazz a cherished memory.
          </div>

          <div className={clsx(styles.home__text, 'text__normal text__normal_white')}>
            Relax and delight in Grandma Jazz's enchanting menu, designed to soothe your soul and uplift your spirits.
          </div>

          <Button
            className={styles.home__button}
            label='See our menu here'
            onClick={handleNavigateToPage(ERoute.REFRESHMENTS)}
            version='white'
          />
        </div>
      </div>
    
      <GoogleMapSection latitude={7.943094394919294} longitude={98.27816004327201} />
    </div>
  )
}

export default Home
