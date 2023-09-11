import React from 'react'
import styles from './Video.module.scss'
import clsx from 'clsx'

interface IVideoProps {
    video: string
}

export const Video: React.FC<IVideoProps> = ({ video }) => {
  return (
    <video className={styles.video} autoPlay loop>
      <source src={video} type='video/mp4' />
    </video>
  )
}