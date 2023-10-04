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
import { defaultSlideUpAnimation } from "@/constants"
import { QuestionCard } from "@/components/QuestionCard/QuestionCard"

interface IFlowersProps {}

const Flowers: React.FC<IFlowersProps> = () => {
  const [ isSmallScreen, setIsSmallScreen ] = useState(false)

  const descriptionRef = useRef<HTMLDivElement>(null)

  const navigateToInstagram = useCallback(() => {
    const instagramUrl = 'https://www.instagram.com/grandmajazzphuket/'
    window.open(instagramUrl, '_blank')
  }, [])

  useEffect(() => {
    if (window) {
      const smallScreen = matchMedia('(max-width: 1008px)')

      setIsSmallScreen(smallScreen.matches)
    }
  }, [setIsSmallScreen])

  const handleSlideUpAnimation = useCallback(() => {
    if (!window) return

    const descriptionElement = descriptionRef.current

    if (descriptionElement) {
      anime({
        targets: descriptionElement,
        ...defaultSlideUpAnimation,
        delay: 600
      })
    }
  }, [])

  useEffect(() => {
    if (descriptionRef.current) {
      triggerAnimation(descriptionRef.current, handleSlideUpAnimation)
    }
  }, [])

  return (
    <div className={styles.flowers}>
      <PageHeader
        className={styles.flowers__header}
        title='our flowers'
        page="flowers"
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

      <div className={styles.flowers__questions}>
        <QuestionCard
          question="What's the difference?"
          answers={['used for several medicinal and recreational purposes', 'sativa has primarily an energizing effect', 'indica has a relaxing effect and can help you sleep']}
        />

        <QuestionCard
          question='Why local?'
          answers={['fresher', 'greater variety', 'reduced environmental impact', 'support local economies', 'access to information']}
        />

        <QuestionCard
          question='Why Organic?'
          answers={['healthier for consumer', 'no pesticides or heavy metals', 'better for environment', 'higher quality', 'more natural terpenes']}
        />
      </div>

      <div className={styles.flowers__whiteSection}>
        {/* navButton */}
        <div className={styles.flowers__navButton} onClick={navigateToInstagram}>
          <div className={styles.flowers__dot}>
            <video className={styles.flowers__video} autoPlay loop>
              <source src='/videos/button.mp4' type='video/mp4' />
            </video>
          </div>

          <div className={clsx(styles.flowers__buttonText, 'text__normal')}>
            see our stock

            <div className={styles.flowers__underline} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flowers