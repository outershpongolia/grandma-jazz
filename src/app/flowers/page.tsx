"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import styles from './flowers.module.scss'
import { PageHeader } from "@/components/PageHeader/PageHeader"
import pageHeaderImage from '../../../public/images/flower.jpg'
import { LeafSvg } from "../../../public/svgs/LeafSvg"
import { strainsList } from "@/constants"
import { StrainItem } from "@/components/StrainItem/StrainItem"
import { FlowersSection } from "@/components/FlowersSection/FlowersSection"
import { MobileFlowersSection } from "@/components/FlowersSection/MobileFlowersSection/MobileFlowersSection"
import { uniqueId } from "lodash"
import anime from "animejs"
import { fireAnimation } from "@/utils"
import clsx from "clsx"

interface IFlowersProps {}

const Flowers: React.FC<IFlowersProps> = () => {
  const [ isSmallScreen, setIsSmallScreen ] = useState(false)

  const descriptionRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const secondTextRef = useRef<HTMLDivElement>(null)

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
      fireAnimation(descriptionRef.current, handleSlideAnimation)
    }
  }, [])

  useEffect(() => {
    if (sectionRef.current) {
      fireAnimation(sectionRef.current, handleFadeInAnimation)
    }
  })

  return (
    <div className={styles.flowers}>
      <PageHeader
        image={pageHeaderImage}
        imageDescription='Marijuana plant with beautiful green leaves'
        title='Our flowers.'
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

      <div className='white-section'>
        <div className={clsx(styles.flowers__whiteSection, 'white-section__container')} ref={sectionRef}>
          <div className={clsx(styles.flowers__text, styles.flowers__title, 'text__normal text__normal_black')} ref={titleRef}>
            Why would you love it here?
          </div>

          <div className={clsx(styles.flowers__text, 'text__normal text__normal_black')} ref={textRef}>
            From outdoor, greenhouse to indoor exotic-grade chronic, Sativa, Indica, Hybrids... we got you. Premium flowers sell fast, that's why we are frequently updating our cannabis stock, discovering new strains regularly.
          </div>

          <div className={clsx(styles.flowers__text, 'text__normal text__normal_black')} ref={secondTextRef}>
            Grown 5 minutes away. That's right, we're in heaven, my dears. Take a look below.
          </div>
        </div>
      </div>

      <div className={styles.flowers__listSection}>
        <div className={styles.flowers__list}>
         {strainsList.map(strain => {
          return (
            <StrainItem
              key={uniqueId(strain.name)}
              title={strain.name}
              text={strain.description}
              image={strain.image}
              note={strain.note}
              type={strain.type}
              feeling={strain.feeling}
              flavour={strain.flavour}
              help={strain.help}
            />
          )
         })}
        </div>
      </div>
    </div>
  )
}

export default Flowers