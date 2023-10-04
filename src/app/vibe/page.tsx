"use client"
import React, { useRef } from 'react'
import styles from './vibe.module.scss'
import { VibeSection } from '@/components/VibeSection/VibeSection'
import { PointerSvg } from '../../../public/svgs/PointerSvg'
import { PageHeader } from '@/components/PageHeader/PageHeader'

import headerImage from '../../../public/images/vibe3.jpg'

interface IVibeProps {}

const Vibe: React.FC<IVibeProps> = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.vibe}>
      <PageHeader
        title="feel our vibe"
        page='vibe'
      />

      <div className={styles.vibe__main}>
        <VibeSection
          reversed
          videos={['/videos/IMG_0290.mp4', '/videos/IMG_0312.mp4']}
          texts={[
            'You may have noticed that we are on a mountain, overlooking lush green nature and a sky full of personality.',
            'Away from the busy streets of Phuket, Grandma Jazz proudly welcomes you alone or with friends.'
          ]}
        />

        <div className={styles.vibe__svgWrapper} ref={svgContainerRef}>
          <PointerSvg className={styles.vibe__svg} />
        </div>

        <VibeSection
          videos={['/videos/IMG_0377.mp4', '/videos/IMG_0304.mp4']}
          texts={[
            'We have meticulously curated a space with no detail overlooked. Everything you need with a splash of quality service from our passionate team. ',
            'Indulge yourself in a good conversation, dive into a good book or play some of our classic table games for a more upbeat tempo. '
          ]}
        />
      </div>
    </div>
  )
}

export default Vibe