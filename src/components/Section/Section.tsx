import React, { PropsWithChildren, useCallback, useEffect, useRef } from "react"
import styles from './Section.module.scss'
import { Button } from "../Button/Button"
import { slideUpAnimation } from "@/utils"
import { defaultSlideUpAnimation } from "@/constants"
import Image, { StaticImageData } from 'next/image'
import clsx from "clsx"
import anime from "animejs"

interface ISectionProps extends PropsWithChildren {
    title: string
    text: string
    image: StaticImageData
    imageDescription: string
    reversed?: boolean
    vertical?: boolean
    hasButton?: boolean
    onClick?: () => void
}

export const Section: React.FC<ISectionProps> = ({
    title,
    text,
    image,
    imageDescription,
    reversed,
    vertical,
    hasButton,
    onClick
}) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)
    const shadowRef = useRef<HTMLDivElement>(null)

    const handleSlideUpAnimation = useCallback(() => {
        if (!window) return

        const sectionElement = sectionRef.current

        if (sectionElement) {
            const titleElement = titleRef.current
            const textElement = textRef.current
            const imageElement = imageRef.current
            const buttonElement = buttonRef.current
            const shadowElement = shadowRef.current

            if (titleElement && textElement && imageElement) {
                anime({
                    targets: titleElement,
                    ...defaultSlideUpAnimation,
                    delay: 300
                }),
                anime({
                    targets: textElement,
                    ...defaultSlideUpAnimation,
                    delay: 600,
                }),
                anime({
                    targets: imageElement,
                    ...defaultSlideUpAnimation,
                    delay: 300
                })
            }

            if (buttonElement) {
                anime({
                    targets: buttonElement,
                    ...defaultSlideUpAnimation,
                    delay: 600
                })
            }

            if (shadowElement) {
                anime({
                    targets: shadowElement,
                    ...defaultSlideUpAnimation,
                    delay: 600
                })
            }
        }
    }, [])

    useEffect(() => {
        if (sectionRef.current) {
            slideUpAnimation(sectionRef.current, handleSlideUpAnimation)
        }
    }, [handleSlideUpAnimation])

    const handleOnClick = useCallback(() => {
        if (!onClick) return null

        onClick()
    }, [onClick])

    return (
        <div
            className={clsx(styles.section, {
                [styles.section_reversed]: reversed,
            })}
            ref={sectionRef}
        >
            <div
                className={clsx(styles.section__container, {
                    [styles.section__container_reversed]: reversed
                })}
            >
                <div
                    className={clsx(styles.section__text, 'text__subtitle', {
                        [styles.section__text_reversed]: !reversed
                    })}
                    ref={titleRef}
                >
                    {title}
                </div>

                <div
                    className={clsx(styles.section__text, 'text__normal', {
                        [styles.section__text_reversed]: reversed
                    })}
                    ref={textRef}
                >
                    {text}
                </div>

                {hasButton &&
                    <div ref={buttonRef}>
                        <Button
                            className={styles.section__button}
                            label='read more'
                            onClick={handleOnClick}
                        />
                    </div>
                }
            </div>

            <div
                className={clsx(styles.section__wrapper, {
                    [styles.section__wrapper_reversed]: reversed
                })}
                ref={imageRef}
            >
                <Image
                    className={clsx(styles.section__image, {
                        [styles.section__image_vertical]: vertical
                    })}
                    src={image}
                    alt={imageDescription}
                />

                <div
                    ref={shadowRef}
                    className={clsx(styles.section__imageShadow, {
                        [styles.section__imageShadow_reversed]: reversed
                    })}
                />
            </div>
        </div>
    )
}