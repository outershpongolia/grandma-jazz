import React, { useCallback, useEffect, useRef } from 'react'
import styles from './FlowersSection.module.scss'
import { triggerAnimation } from '@/utils'
import anime from 'animejs'
import clsx from 'clsx'
import Image from 'next/image'

import grandmaImage from '../../../public/images/grandma1.jpeg'
import grandmaImage2 from '../../../public/images/grandma2.jpeg'
import grandmaImage3 from '../../../public/images/jump.jpeg'
import grandmaImage4 from '../../../public/images/grandma3.png'

interface IFlowersSectionProps {}

export const FlowersSection: React.FC<IFlowersSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const image1Ref = useRef<HTMLDivElement>(null)
  const image2Ref = useRef<HTMLDivElement>(null)
  const image3Ref = useRef<HTMLDivElement>(null)
  const image4Ref = useRef<HTMLDivElement>(null)

  const handleSlideAnimation = useCallback(() => {
    if (!window) return

    const sectionElement = sectionRef.current

    if (sectionElement) {
      const titleElement = titleRef.current
      const textElement = textRef.current
      const text2Element = text2Ref.current
      const image1Element = image1Ref.current
      const image2Element = image2Ref.current
      const image3Element = image3Ref.current
      const image4Element = image4Ref.current

      if (titleElement && textElement && text2Element && image1Element && image2Element && image3Element && image4Element) {
        anime({
          targets: titleElement,
          translateX: [50, 0], // slide in from right
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: 0
        }),
        anime({
          targets: textElement,
          translateX: [50, 0],
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: 300,
        }),
        anime({
          targets: text2Element,
          translateX: [50, 0],
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: 600
        }),
        anime({
          targets: image1Element,
          translateX: [-50, 0], // slide in from left
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: 0
        }),
        anime({
          targets: image2Element,
          translateX: [-50, 0],
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: 300
        }),
        anime({
          targets: image3Element,
          translateX: [50, 0],
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: 300
        }),
        anime({
          targets: image4Element,
          translateX: [50, 0],
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: 600
        })
      }
    }
}, [])

  useEffect(() => {
    if (sectionRef.current) {
      triggerAnimation(sectionRef.current, handleSlideAnimation)
    }
  }, [])

  return (
    <div className={styles.flowersSection} ref={sectionRef}>
      <div className={styles.flowersSection__container}>
        <div className={styles['flowersSection__image-wrapper']} ref={image1Ref}>
          <Image
            className={styles.flowersSection__image}
            src={grandmaImage4}
            alt='Old grandma showing her marijuana plants.'
          />
        </div>

        <div className={styles.flowersSection__textWrapper}>
          <div className={clsx(styles.flowers__text, 'text__subtitle')} ref={titleRef}>Premium quality flowers.</div>

          <div className={clsx(styles.flowers__text, 'text__normal')} ref={textRef}>
            Come and experience the finest quality organic cannabis on the island, always sourced from local farmers in Thailand.
          </div>

          <div className={clsx(styles.flowers__text, 'text__normal')} ref={text2Ref}>
            Elevate your cannabis experience with each pristine bud, handpicked and delicately cultivated to deliver the utmost quality and flavor.
          </div>
        </div>
      </div>

      <div className={styles.flowersSection__container}>
        <div className={styles['flowersSection__image-wrapper']} ref={image2Ref}>
          <Image
            className={styles.flowersSection__image}
            src={grandmaImage2}
            alt='Old grandma with a hat showing her marijuana plants.'
          />
        </div>

        <div className={styles['flowersSection__image-wrapper']} ref={image3Ref}>
          <Image
            className={styles.flowersSection__image}
            src={grandmaImage3}
            alt='Old grandma jumping in her backyard'
          />
        </div>

        <div className={styles['flowersSection__image-wrapper']} ref={image4Ref}>
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