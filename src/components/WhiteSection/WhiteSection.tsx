import React, { PropsWithChildren } from 'react'
import styles from './WhiteSection.module.scss'

interface IWhiteSectionProps extends PropsWithChildren {}

export const WhiteSection: React.FC<IWhiteSectionProps> = ({ children }) => {
    return (
        <div className={styles.whiteSection}>
            <div className={styles.whiteSection__container}>
                {children}
            </div>
        </div>
    )
}