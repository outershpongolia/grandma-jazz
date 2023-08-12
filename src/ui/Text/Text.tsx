import React, { PropsWithChildren } from 'react'
import styles from './Text.module.scss'
import clsx from 'clsx'

interface ITextProps extends PropsWithChildren {
    className?: string
}

interface ITextRefProps {
    animateText?: () => void
}

export const TitleText: React.FC<ITextProps> = ({ className, children }) => {
    return <div className={clsx(styles.text, styles.text__title, className)}>{children}</div>
}

export const SubtitleText: React.FC<ITextProps> = ({ children, className }) => {
    return <div className={clsx(styles.text, styles.text__subtitle, className)}>{children}</div>
}

export const NormalText: React.FC<ITextProps> = ({ children, className }) => {
    return <div className={clsx(styles.text, styles.text__normal, className)}>{children}</div>
}
