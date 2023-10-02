"use client"
import React, { useCallback, useEffect, useRef } from "react"
import styles from "./PageHeader.module.scss"
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"
import anime from "animejs"
import { triggerAnimation } from "@/utils"

interface IPageHeaderProps {
    image: StaticImageData
    imageDescription: string
    title: string
    className?: string
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ image, imageDescription, title, className }) => {
    const titleRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)

    const handleAnimation = useCallback(() => {
        if (!window) return

        const headerElement = headerRef.current

        if (headerElement) {
            const titleElement = titleRef.current

            if (titleElement) {
                anime({
                    targets: titleElement,
                    opacity: 1,
                    easing: 'easeOutQuad',
                    duration: 900,
                    delay: 100,
                })
            }
        }
    }, [])

    useEffect(() => {
        if (headerRef.current) {
            triggerAnimation(headerRef.current, handleAnimation)
        }
    }, [])
    
    return (
        <div
            className={clsx(styles.pageHeader)}
            ref={headerRef}
        >
            <Image
                className={styles.pageHeader__image}
                src={image}
                alt={imageDescription}
            />

            <div className={clsx(styles.pageHeader__shadow, className)}></div>

            <div
                className={clsx(styles.pageHeader__title, 'text__title')}
                ref={titleRef}
            >
                {title}
            </div>
        </div>
    )
}