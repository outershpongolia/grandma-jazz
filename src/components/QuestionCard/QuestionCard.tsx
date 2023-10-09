import React, { useCallback, useEffect, useRef } from "react"
import styles from './QuestionCard.module.scss'
import clsx from "clsx"
import { BsCheck } from 'react-icons/bs'
import anime from "animejs"
import { fadeInOutAnimation } from "@/utils"
import { uniqueId } from "lodash"

interface IQuestionCardProps {
    question: string
    answers: string[]
}

const defaultAnimation = {
    easing: 'easeInOutQuad',
    duration: 800
}

export const QuestionCard: React.FC<IQuestionCardProps> = ({ question, answers }) => {
    const cardRef = useRef<HTMLDivElement>(null)
    
    const handleFadeInAnimation = useCallback(() => {
        const cardElement = cardRef.current

        anime({
            targets: cardElement,
            opacity: [0.2, 1],
            ...defaultAnimation
        })
    }, [])

    const handleFadeOutAnimation = useCallback(() => {
        const cardElement = cardRef.current

        anime({
            targets: cardElement,
            opacity: [1, 0.2],
            ...defaultAnimation
        })
    }, [])

    useEffect(() => {
        if (cardRef.current) {
            fadeInOutAnimation(cardRef.current, handleFadeInAnimation, handleFadeOutAnimation)
        }
    }, [handleFadeInAnimation, handleFadeOutAnimation])
    
    return (
        <div className={styles.questionCard} ref={cardRef}>
            <div className={clsx(styles.questionCard__question, 'text__subtitle')}>{question}</div>

            <div className={styles.questionCard__answers}>
                {answers.map(answer => {
                    return (
                        <div key={uniqueId(answer)} className={styles.questionCard__answer}>
                            <BsCheck className={styles.questionCard__icon} />
                            {answer}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}