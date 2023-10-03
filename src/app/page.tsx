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
import headerImage from '../../public/images/main2.jpg'
import introImage from '../../public/images/norm.jpeg'
import flowersImage from '../../public/images/buds.jpg'
import vibeImage from '../../public/images/vibe.jpeg'
import refreshmentsLogo from '../../public/images/logo-1.jpeg'
import clsx from 'clsx'
import { triggerAnimation } from '@/utils'
import anime from 'animejs'

interface IHomeProps {}

const Home: NextPage<IHomeProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const secondTextRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const handleFadeInAnimation = useCallback(() => {
    if (!window) return

    const sectionElement = sectionRef.current

    if (sectionElement) {
      const logoElement = logoRef.current
      const textElement = textRef.current
      const secondTextElement = secondTextRef.current
      const buttonElement = buttonRef.current

      if (logoElement && textElement && secondTextElement && buttonElement) {
        anime({
          targets: logoElement,
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 1000
        }),
        anime({
          targets: textElement,
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 1000,
          delay: 400,
        }),
        anime({
          targets: secondTextElement,
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 1000,
          delay: 700
        }),
        anime({
          targets: buttonElement,
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 1000,
          delay: 1000
        })
      }
    }
  }, [])

  useEffect(() => {
    if (sectionRef.current) {
      triggerAnimation(sectionRef.current, handleFadeInAnimation)
    }
  }, [])

  const handleNavigateToPage = useCallback((route: ERoute) => {
    return () => router.push(route)
  }, [router.push])

  return (
    <div className={styles.home}>
      <PageHeader
        page='home'
        title='premium quality flowers'
      />

      <div className={styles.home__gradient}>
        <Section
          title="it's in the details"
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
          title="high on the mountain"
          text="Wide, open mountains surround the cafe, bringing calm & ease for good conversation. Rest, with friends or working from a laptop, we've considered your privacy, while you enjoy the little things."
          image={vibeImage}
          imageDescription="Girl is sitting on the balcony, smoking cigarrete and enjoying the view of the jungle"
          name="vibe"
          hasButton
          onClick={handleNavigateToPage(ERoute.VIBE)}
        />
      </div>

      <div className='white-section' ref={sectionRef}>
        <div className={styles.home__logoWrapper} ref={logoRef}>
          <Image
            className={styles.home__logo}
            src={refreshmentsLogo}
            alt='Two people sitting in a cafe, drinking tea, smoking and talking logo'
          />
        </div>

        <div className={clsx(styles.home__text, 'text__normal text__normal_black')} ref={textRef}>
          With a small menu of hand-crafted / local refreshments, at Grandma Jazz it's all about the experience.
          Savor the artistry of our beverages and delectable sweets, each lovingly made to create an unforgettable taste sensation,
          making every visit to Grandma Jazz a cherished memory.
        </div>

        <div className={clsx(styles.home__text, 'text__normal text__normal_black')} ref={secondTextRef}>
          Relax and delight in Grandma Jazz's enchanting menu, designed to soothe your soul and uplift your spirits.
        </div>

        <div ref={buttonRef} style={{opacity: 0}}>
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
