"use client"
import React, { useCallback, useEffect, useRef } from "react"
import styles from "./PageHeader.module.scss"
import { slideUpAnimation } from "@/utils"
import { defaultSlideUpAnimation } from "@/constants"
import clsx from "clsx"
import anime from "animejs"

interface IPageHeaderProps {
    title: string
    page: 'home' | 'flowers' | 'vibe' | 'vision'
    className?: string
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ title, page, className }) => {
    const titleRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)

    const handleSlideUpAnimation = useCallback(() => {
        if (!window) return

        const headerElement = headerRef.current

        if (headerElement) {
            const titleElement = titleRef.current

            if (titleElement) {
                anime({
                    targets: titleElement,
                    ...defaultSlideUpAnimation
                })
            }
        }
    }, [])

    useEffect(() => {
        if (headerRef.current) {
            slideUpAnimation(headerRef.current, handleSlideUpAnimation)
        }
    }, [handleSlideUpAnimation])
    
    return (
        <div
            className={clsx(styles.pageHeader, {
                [styles[`pageHeader_${page}`]]: page
            })}
            ref={headerRef}
        >
            <div className={clsx(styles.pageHeader__shadow, className)} />

            <div
                className={clsx(styles.pageHeader__title, 'text__title', {
                    [styles[`pageHeader__title_${page}`]]: page
                })}
                ref={titleRef}
            >
                {title}
            </div>
        </div>
    )
}