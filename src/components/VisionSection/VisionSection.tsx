import React from "react"
import styles from './VisionSection.module.scss'
import clsx from "clsx"

interface IVisionSectionProps {
    title: string
    texts: string[]
    reversed?: boolean
}

export const VisionSection: React.FC<IVisionSectionProps> = ({ title, texts, reversed }) => {
    return (
        <div className={clsx(styles.visionSection, {
            [styles.visionSection_reversed]: reversed
        })}>
            <div
                className={styles.visionSection__title}
            >
                {title}
            </div>
            
            {texts && texts.map(text => <div className={styles.visionSection__text}>{text}</div>)}
        </div>
    )
}