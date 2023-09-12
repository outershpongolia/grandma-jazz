import React from "react"
import styles from './vision.module.scss'
import { uniqueId } from "lodash"
import Image from "next/image"

import templateImage from '../../../public/images/vibe2.jpeg'

interface IVisionProps {}

const localText = ['local', 'no imported weed', 'coffee from Phuket']
const experienceText = ['experience', 'comfortable seating', 'considerate lighting', 'clean environment', 'cultured music', 'compassionate stuff', 'table service', 'countless details', 'all for you']
const sustainableText = ['sustainable', 'no plastic', 'no animal products', 'recycled', 'from the coffee machine & furniture', 'to the shoes on our feet']
const closingText = ['with love', 'Grandma Jazz']

const Vision: React.FC<IVisionProps> = () => {
  return (
    <div className={styles.vision}>

      <div className={styles.vision__main}>
        <div className={styles.vision__imageWrapper}>
          <Image
            className={styles.vision__image}
            src={templateImage}
            alt=""
          />
        </div>

        <div className={styles.vision__textWrapper}>
          <div className={styles.vision__text}>Local</div>
          <div className={styles.vision__text}>no imported weed</div>
          <div className={styles.vision__text}>coffee from Phuket</div>
        </div>
      </div>

    </div>
  )
}

export default Vision