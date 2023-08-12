import React, { useCallback, useEffect, useRef } from "react"
import styles from "./PageHeader.module.scss"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"
import { TitleText } from "@/ui/Text/Text"
import anime from "animejs"

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
                    delay: 0,
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    handleAnimation()
                    observer.unobserve(entry.target)
                }
            })
        }, {threshold: 0.2})

        if (headerRef.current) {
            observer.observe(headerRef.current)
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current)
            }
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

            <div className={clsx(styles.pageHeader__title, styles.pageHeader__text)} ref={titleRef}>{title}</div>

            {text &&
                <div
                    className={clsx(styles.pageHeader__description, styles.pageHeader__text)}
                    ref={textRef}
                >
                    {text}
                </div>
            }
        </div>
    )
}