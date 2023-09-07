import React from 'react'
import styles from './vibe.module.scss'
import { VibeSection } from '@/components/VibeSection/VibeSection'

interface IVibeProps {}

const Vibe: React.FC<IVibeProps> = () => {
  return (
    <div className={styles.vibe}>

      In construction ...

      {/* <VibeSection
        video='/videos/example-video.mp4'
        text='You may have noticed that we are on a mountain, overlooking lush green nature and a sky full of personality.'
      />

      <VibeSection
        video='/videos/example-video2.mp4'
        text='Away from the busy streets of Phuket, Grandma Jazz proudly welcomes you alone or with friends.'
        left
      /> */}

    </div>
  )
}

export default Vibe