import React, { PropsWithChildren, useCallback, useEffect, useRef } from "react"
import styles from './Section.module.scss'
import clsx from "clsx"
import Image, { StaticImageData } from 'next/image'
import { Button } from "../Button/Button"
import anime from "animejs"
import { slideUpAnimation } from "@/utils"
import { defaultSlideUpAnimation } from "@/constants"

interface ISectionProps extends PropsWithChildren {
    title: string
    text: string
    image: StaticImageData
    imageDescription: string
    name: 'intro' | 'flowers' | 'vibe' | 'vision'
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
                [styles.section_reversed]: name === 'flowers',
            })}
            ref={sectionRef}
        >
            <div
                className={clsx(styles.section__container, {
                    [styles.section__container_right]: name === 'intro' || name === 'vibe' || name === 'vision',
                    [styles.section__container_left]: name === 'flowers',
                })}
            >
                <div
                    className={clsx(styles.section__text, 'text__subtitle', {
                        'text_right': name === 'intro' || name === 'vibe' || name === 'vision'
                    })}
                    ref={titleRef}
                >
                    {title}
                </div>

                <div
                    className={clsx(styles.section__text, 'text__normal', {
                        'text_right': name === 'intro' || name === 'vibe' || name === 'vision'
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
                    [styles.section__wrapper_right]: name === 'intro' || name === 'vibe' || name === 'vision',
                    [styles.section__wrapper_left]: name === 'flowers'
                })}
                ref={imageRef}
            >
                <Image
                    className={clsx(styles.section__image, styles[`section__image_${name}`])}
                    src={image}
                    alt={imageDescription}
                />

                <div
                    ref={shadowRef}
                    className={clsx(styles.section__imageShadow, {
                        [styles.section__imageShadow_right]: name === 'flowers'
                    })}
                />
            </div>
        </div>
    )
}