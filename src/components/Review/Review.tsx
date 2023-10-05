import React from "react"
import styles from './Review.module.scss'
import clsx from "clsx"

interface IReviewProps {
    quote: string
    username: string
    color: string
}

export const Review: React.FC<IReviewProps> = ({ quote, username, color }) => {
    return (
        <div className={clsx(styles.review, {
            [styles[`review_${color}`]]: color
        })}>
            <div className={clsx(styles.review__quote, styles.review__text, 'text__normal_black')}>"{quote}"</div>

            <div className={clsx(styles.review__text, 'text__normal_black')}>{username}</div>
        </div>
    )
}