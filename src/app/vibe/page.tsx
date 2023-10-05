"use client"
import React, { useEffect, useRef, useState } from 'react'
import styles from './vibe.module.scss'
import { VibeSection } from '@/components/VibeSection/VibeSection'
import { PointerSvg } from '../../../public/svgs/PointerSvg'
import { PageHeader } from '@/components/PageHeader/PageHeader'
import { Review } from '@/components/Review/Review'

import quotes from '../../../quotes.json'
import { uniqueId } from 'lodash'

interface IVibeProps {}

const Vibe: React.FC<IVibeProps> = () => {
  const [ isMediumScreen, setIsMediumScreen ] = useState(false)

  const svgContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window) {
      const mediumScreen = matchMedia('(max-width: 1008px)')
      const smallScreen = matchMedia('(max-width: 640px)')

      setIsMediumScreen(mediumScreen.matches && !smallScreen.matches)
    }
  }, [setIsMediumScreen])

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

      <div className={styles.vibe__reviews}>
        {quotes.map((quote, index) => {
          return (
            <Review
              key={uniqueId(quote.quote)}
              quote={quote.quote}
              username={quote.username}
              color={
                isMediumScreen
                ? index % 3 === 0 ? 'white' : 'black'
                : index % 2 === 0 ? 'white' : 'black'
              }
            />
          )
        })}
      </div>
    </div>
  )
}

export default Vibe