import React, { useEffect, useRef, useState } from 'react'
import styles from './Video.module.scss'

interface IVideoProps {
    video: string
}

export const Video: React.FC<IVideoProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play()
        } else {
          videoElement.pause()
        }
      })
    }, {threshold: 0.6})
  
    observer.observe(videoElement)
  }, [])

  return (
    <video className={styles.video} autoPlay loop muted ref={videoRef}>
      <source src={video} type='video/mp4' />
    </video>
  )
}