"use client"
import React, { useEffect, useState } from "react"
import styles from './flowers.module.scss'
import { PageHeader } from "@/components/PageHeader/PageHeader"
import pageHeaderImage from '../../../public/images/flower.jpg'
import { WhiteSection } from "@/components/WhiteSection/WhiteSection"
import { LeafSvg, LeafSvgDense, LeafSvgWide } from "../../../public/svgs/LeafSvg"
import { strainsList } from "@/constants"
import { StrainItem } from "@/components/StrainItem/StrainItem"
import { FlowersSection } from "@/components/FlowersSection/FlowersSection"
import { MobileFlowersSection } from "@/components/FlowersSection/MobileFlowersSection/MobileFlowersSection"
import { uniqueId } from "lodash"

interface IFlowersProps {}

const Flowers: React.FC<IFlowersProps> = () => {
  const [ isSmallScreen, setIsSmallScreen ] = useState(false)

  useEffect(() => {
    if (window) {
      const smallScreen = matchMedia('(max-width: 1008px)')

      setIsSmallScreen(smallScreen.matches)
    }
  }, [setIsSmallScreen])

  return (
    <div className={styles.flowers}>
      <PageHeader
        image={pageHeaderImage}
        imageDescription='Marijuana plant with beautiful green leaves'
        title='Our flowers.'
      />

      <div className={styles.flowers__main}>
        <div className={styles['flowers__description-wrapper']}>
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

      <WhiteSection>
        <div className={styles['flowers__whiteSection-wrapper']}>
          <div className={styles['flowers__whiteSection-svg']}>
            <LeafSvg />
          </div>

          <div className={styles['flowers__whiteSection-text']}>
            From outdoor, greenhouse to indoor exotic-grade chronic, Sativa, Indica, Hybrids... we got you.
          </div>
        </div>

        <div className={styles['flowers__whiteSection-wrapper']}>
          <div className={styles['flowers__whiteSection-text']}>
            Premium flowers sell fast, that's why we are frequently updating our cannabis stock, discovering new strains regularly.
          </div>

          <div className={styles['flowers__whiteSection-svg']}>
            <LeafSvgWide />
          </div>
        </div>

        <div className={styles['flowers__whiteSection-wrapper']}>
          <div className={styles['flowers__whiteSection-svg']}>
            <LeafSvgDense />
          </div>

          <div className={styles['flowers__whiteSection-text']}>
            Grown 5 minutes away. That's right, we're in heaven, my dears. Take a look below.
          </div>
        </div>
      </WhiteSection>

      <div className={styles.flowers__listSection}>
        <div className={styles['flowers__listSection-list']}>
         {strainsList.map(strain => {
          return (
            <StrainItem
              key={uniqueId(strain.name)}
              title={strain.name}
              text={strain.description}
              image={strain.image}
              note={strain.note}
            />
          )
         })}
        </div>
      </div>
    </div>
  )
}

export default Flowers