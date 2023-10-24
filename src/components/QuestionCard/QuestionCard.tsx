import React, { useCallback, useEffect, useRef } from "react"
import styles from './QuestionCard.module.scss'
import { BsCheck } from 'react-icons/bs'
import { fadeInOutAnimation } from "@/utils"
import { uniqueId } from "lodash"
import clsx from "clsx"
import anime from "animejs"

export interface IContent {
    question: string,
    answers: string[]
}

interface IQuestionCardProps {
    content: IContent[]
}

const defaultAnimation = {
    easing: 'easeInOutQuad',
    duration: 800
}

export const QuestionCard: React.FC<IQuestionCardProps> = ({ content }) => {
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
            {content.map((cont, index) => {
                return (
                    <div
                        key={uniqueId(cont.question)}
                        className={clsx(styles.questionCard__section, {
                            [styles.questionCard__section_left]: index === 0,
                            [styles.questionCard__section_right]: index === 1,
                        }
                    )}>
                        <div className={clsx(styles.questionCard__question, 'text__subtitle')}>
                            {cont.question}
                        </div>

                        <div className={styles.questionCard__answers}>
                            {cont.answers.map(answer => {
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
            })}
        </div>
    )
}