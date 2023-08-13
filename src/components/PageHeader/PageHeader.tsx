import React, { useCallback, useEffect, useRef } from "react"
import styles from "./PageHeader.module.scss"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"
import anime from "animejs"
import { fireAnimation } from "@/utils"

interface IPageHeaderProps {
    image: StaticImageData
    imageDescription: string
    title: string
    text?: string
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ image, imageDescription, title, text }) => {
    const titleRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)

    const handleAnimation = useCallback(() => {
        if (!window) return

        const headerElement = headerRef.current

        if (headerElement) {
            const titleElement = titleRef.current
            const textElement = textRef.current

            if (titleElement) {
                anime({
                    targets: titleElement,
                    opacity: 1,
                    easing: 'easeOutQuad',
                    duration: 900,
                    delay: 100,
                })
            }
    
            if (textElement) {
                anime({
                    targets: textElement,
                    opacity: 1,
                    easing: 'easeOutQuad',
                    duration: 900,
                    delay: 400,
                })
            }
        }
    }, [])

    useEffect(() => {
        if (headerRef.current) {
            fireAnimation(headerRef.current, handleAnimation)
        }
    }, [])
    
    return (
        <div className={styles.pageHeader} ref={headerRef}>
            <Image
                className={styles.pageHeader__image}
                src={image}
                alt={imageDescription}
            />

            <div className={styles.pageHeader__shadow}></div>

            <div className={clsx(styles.pageHeader__text, 'text__title')} ref={titleRef}>{title}</div>

            {text &&
                <div
                    className={clsx(styles.pageHeader__description, styles.pageHeader__text, 'text__normal')}
                    ref={textRef}
                >
                    {text}
                </div>
            }
        </div>
    )
}