import React from "react"
import styles from './vision.module.scss'
import Image from "next/image"

import headerImage from '../../../public/images/vision-grandma.png'

import { VisionSection } from "@/components/VisionSection/VisionSection"
import clsx from "clsx"
import { uniqueId } from "lodash"

interface IVisionProps {}

const texts = ["Grandma Jazz is passionately dedicated to creating an authentic, local experience in Phuket by fostering a vibrant community built on sustainable practices.", "We aim to be more than just a cafe - we're a place where old traditions meet new insights, where quality is our promise and where everyone is part of the Grandma Jazz family."]

const Vision: React.FC<IVisionProps> = () => {
  return (
    <div className={styles.vision}>
      <div className={styles.vision__header}>
        <Image
          className={styles.vision__headerImage}
          src={headerImage}
          alt={""}
        />

        <div className={styles.vision__textWrapper}>
          {texts && texts.map(text => {
            return <div key={uniqueId(text)} className={clsx(styles.vision__text, 'text__normal')}>{text}</div>
          })}
        </div>
      </div>

      <div className={styles.vision__main}>
        <VisionSection
          title='Local.'
          texts={['no imported weed,', 'coffee from Phuket.']}
        />

        <VisionSection
          title='Experience.'
          texts={['comfortable seating,', 'considerate lighting,', 'clean environment,', 'cultured music,', 'compassionate stuff,', 'table service,', 'countless details,', 'all for you.']}
          reversed
        />

        <VisionSection
          title='Sustainable.'
          texts={['no plastic,', 'no animal products,', 'recycled,', 'from the coffee machine & furniture,', 'to the shoes on our feet.']}
        />

        <VisionSection
          title=''
          texts={['With love,', 'Grandma Jazz']}
          reversed
        />
      </div>

    </div>
  )
}

export default Vision