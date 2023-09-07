import React from 'react'
import styles from './VibeSection.module.scss'
import clsx from 'clsx'

interface IVibeSectionProps {
    video: string
    text: string
    left?: boolean
}

export const VibeSection: React.FC<IVibeSectionProps> = ({ video, text, left }) => {
    return (
        <div className={clsx(styles.vibeSection, {
            [styles.vibeSection_left]: left
        })}>
            <div className={styles.vibeSection__videoWrapper}>
                <video className={styles.vibeSection__video} autoPlay>
                    <source src={video} type='video/mp4' />
                </video>
            </div>

            <div className={clsx(styles.vibeSection__text, {
                [styles.vibeSection__text_left]: left
            })}>
                {text}
            </div>
      </div>
    )
}