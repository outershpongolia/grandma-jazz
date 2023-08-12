import React, { PropsWithChildren } from 'react'
import styles from './Text.module.scss'
import clsx from 'clsx'

interface ITextProps extends PropsWithChildren {
    style?: any // TO DO: change this
    className?: string
}

interface ITextRefProps {
    animateText?: () => void
}

export const TitleText: React.FC<ITextProps> = ({ children, className, style={} }) => {
    return <div className={clsx(styles.text, styles.text__title, className)} style={style}>{children}</div>
}

export const SubtitleText: React.FC<ITextProps> = ({ children, className, style={} }) => {
    return <div className={clsx(styles.text, styles.text__subtitle, className)} style={style}>{children}</div>
}

export const NormalText: React.FC<ITextProps> = ({ children, className, style={} }) => {
    return <div className={clsx(styles.text, styles.text__normal, className)} style={style}>{children}</div>
}
