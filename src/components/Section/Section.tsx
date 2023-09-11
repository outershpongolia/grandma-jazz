import React, { PropsWithChildren, useCallback, useEffect, useRef } from "react"
import styles from './Section.module.scss'
import clsx from "clsx"
import Image, { StaticImageData } from 'next/image'
import { Button } from "../Button/Button"
import anime from "animejs"
import { triggerAnimation } from "@/utils"

interface ISectionProps extends PropsWithChildren {
    title: string
    text: string
    image: StaticImageData
    imageDescription: string
    name: 'intro' | 'flowers' | 'vibe'
    hasButton?: boolean
    onClick?: () => void
}

export const Section: React.FC<ISectionProps> = ({
    title,
    text,
    image,
    imageDescription,
    name,
    hasButton,
    onClick
}) => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)
    const shadowRef = useRef<HTMLDivElement>(null)

    const handleSlideAnimation = useCallback(() => {
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
                    translateX: name === 'flowers' ? [50, 0] : [-50, 0], // slide in from right : slide in from left
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: 0
                }),
                anime({
                    targets: textElement,
                    translateX: name === 'flowers' ? [50, 0] : [-50, 0],
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: 300,
                }),
                anime({
                    targets: imageElement,
                    translateX: name === 'flowers' ? [-50, 0] : [50, 0],
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: 0
                })
            }

            if (buttonElement) {
                anime({
                    targets: buttonElement,
                    translateX: name === 'vibe' ? [-50, 0] : [50, 0],
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: 600
                })
            }

            if (shadowElement) {
                anime({
                    targets: shadowElement,
                    translateX: name === 'flowers' ? [-50, 0] : [50, 0],
                    opacity: [0, 1],
                    easing: 'easeOutQuad',
                    duration: 800,
                    delay: 600
                })
            }
        }
    }, [])

    useEffect(() => {
        if (sectionRef.current) {
            triggerAnimation(sectionRef.current, handleSlideAnimation)
        }
    }, [])

    const handleOnClick = useCallback(() => {
        if (!onClick) return null

        onClick()
    }, [onClick])

    return (
        <div
            className={clsx(styles.section, {
                [styles.section_reversed]: name === 'flowers',
            })}
            ref={sectionRef}
        >
            <div
                className={clsx(styles.section__container, {
                    [styles.section__container_right]: name === 'intro' || name === 'vibe',
                    [styles.section__container_left]: name === 'flowers',
                })}
            >
                <div
                    className={clsx(styles.section__text, 'text__subtitle', {
                        'text_right': name === 'intro' || name === 'vibe'
                    })}
                    ref={titleRef}
                >
                    {title}
                </div>

                <div
                    className={clsx(styles.section__text, 'text__normal', {
                        'text_right': name === 'intro' || name === 'vibe'
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
                    [styles.section__wrapper_right]: name === 'intro' || name === 'vibe',
                    [styles.section__wrapper_left]: name === 'flowers'
                })}
                ref={imageRef}
            >
                <Image
                    className={clsx(styles.section__image, styles[`section__image_${name}`])}
                    src={image}
                    alt={imageDescription}
                />

                <div ref={shadowRef} className={clsx(styles.section__imageShadow, {
                    [styles.section__imageShadow_right]: name === 'flowers'
                })}></div>
            </div>
        </div>
    )
}