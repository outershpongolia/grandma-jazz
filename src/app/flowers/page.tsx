"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import styles from './flowers.module.scss'
import { PageHeader } from "@/components/PageHeader/PageHeader"
import pageHeaderImage from '../../../public/images/flower.jpg'
import { FlowersSection } from "@/components/FlowersSection/FlowersSection"
import { MobileFlowersSection } from "@/components/FlowersSection/MobileFlowersSection/MobileFlowersSection"
import anime from "animejs"
import { triggerAnimation } from "@/utils"
import clsx from "clsx"

interface IFlowersProps {}

const Flowers: React.FC<IFlowersProps> = () => {
  const [ isSmallScreen, setIsSmallScreen ] = useState(false)

  const descriptionRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const secondTextRef = useRef<HTMLDivElement>(null)

  const navigateToInstagram = useCallback(() => {
    const instagramUrl = 'https://www.instagram.com/stories/highlights/17971187909126277/'
    window.open(instagramUrl, '_blank')
  }, [])

  useEffect(() => {
    if (window) {
      const smallScreen = matchMedia('(max-width: 1008px)')

      setIsSmallScreen(smallScreen.matches)
    }
  }, [setIsSmallScreen])

  const handleSlideAnimation = useCallback(() => {
    if (!window) return

    const descriptionElement = descriptionRef.current

    if (descriptionElement) {
      anime({
        targets: descriptionElement,
        translateX: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 800,
        delay: 0
      })
    }
  }, [])

  const handleFadeInAnimation = useCallback(() => {
    if (!window) return

    const sectionElement = sectionRef.current

    if (sectionElement) {
      const logoElement = titleRef.current
      const textElement = textRef.current
      const secondTextElement = secondTextRef.current

      if (logoElement && textElement && secondTextElement) {
        anime({
          targets: logoElement,
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 1000,
          delay: 0
        }),
        anime({
          targets: textElement,
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 1000,
          delay: 300,
        }),
        anime({
          targets: secondTextElement,
          opacity: 1,
          easing: 'easeOutQuad',
          duration: 1000,
          delay: 600
        })
      }
    }
  }, [])

  useEffect(() => {
    if (descriptionRef.current) {
      triggerAnimation(descriptionRef.current, handleSlideAnimation)
    }
  }, [])

  useEffect(() => {
    if (sectionRef.current) {
      triggerAnimation(sectionRef.current, handleFadeInAnimation)
    }
  })

  return (
    <div className={styles.flowers}>
      <PageHeader
        className={styles.flowers__header}
        image={pageHeaderImage}
        imageDescription='Marijuana plant with beautiful green leaves'
        title='Our flowers.'
        pageType='flowers'
      />

      <div className={styles.flowers__main}>
        <div className={styles.flowers__descriptionWrapper} ref={descriptionRef}>
          <div className={styles.flowers__description}>
            We source only the finest quality flowers from farmers who pride themselves on their plants, not the size of the farms.
          </div>
        </div>

        <div className={styles.flowers__horizontalLine} />

        {isSmallScreen
          ? <MobileFlowersSection />
          : <FlowersSection />
        }
      </div>

      <div className={clsx(styles.flowers__whiteSection, 'white-section')} ref={sectionRef}>
        <div className={clsx(styles.flowers__text, styles.flowers__title, 'text__normal text__normal_black')} ref={titleRef}>
          Why would you love it here?
        </div>

        <div className={styles.flowers__textWrapper}>
          <div className={clsx(styles.flowers__text, 'text__normal text__normal_black')} ref={textRef}>
            From outdoor, greenhouse to indoor exotic-grade chronic, Sativa, Indica, Hybrids... we got you. Premium flowers sell fast, that's why we are frequently discovering new strains regularly and updating our cannabis stock.
          </div>

          <div className={clsx(styles.flowers__text, 'text__normal text__normal_black')} ref={secondTextRef}>
            Grown 5 minutes away. That's right, we're in heaven, my dears. Check our Instagram page to see what we offer today.
          </div>
        </div>

        <div className={styles.flowers__navButton} onClick={navigateToInstagram}>
          <div className={styles.flowers__dot}>
            <video className={styles.flowers__video} autoPlay loop>
              <source src='/videos/example-video-short.mp4' type='video/mp4' />
            </video>
          </div>

          <div className={clsx(styles.flowers__buttonText, 'text__normal')}>
            see our instagram

            <div className={styles.flowers__underline} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flowers