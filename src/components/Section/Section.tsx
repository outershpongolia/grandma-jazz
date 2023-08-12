import React, { PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from "react"
import styles from './Section.module.scss'
import clsx from "clsx"
import Image, { StaticImageData } from 'next/image'
import { Button } from "../Button/Button"
import { NormalText, SubtitleText } from "@/ui/Text/Text"
import anime from 'animejs'

interface ISectionProps extends PropsWithChildren {
    title: string
    text: string
    image: StaticImageData
    imageDescription: string
    name: 'intro' | 'flowers' | 'vibe'
    hasButton?: boolean
    onClick?: () => void
}

export const Section: React.FC<ISectionProps> = ({ title, text, image, imageDescription, name, hasButton, onClick, children }) => {
    const sectionRef = useRef(null)
    const containerRef = useRef(null)
    const wrapperRef = useRef(null)

    const animateContainer = () => {
        anime({
            targets: containerRef.current,
            translateX: name === 'flowers' ? [-100, 0] : [100, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 700,
            delay: 300,
        });
    };
    
    const animateWrapper = () => {
        anime({
            targets: wrapperRef.current,
            translateX: [-100, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 700,
            delay: 300,
        });
    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    if (target === containerRef.current) {
                        animateContainer();
                    } else if (target === wrapperRef.current) {
                        animateWrapper();
                    }
                }
            })
        }, options)

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }

            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }

            if (wrapperRef.current) {
                observer.unobserve(wrapperRef.current);
            }
        }
    }, [containerRef, wrapperRef, sectionRef])

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
                    // [styles.section__container_slideLeft]: isVisible && (name === 'intro' || name === 'vibe'),
                    // [styles.section__container_slideRight]: isVisible && name === 'flowers',
                })}
                ref={containerRef}
            >
                <SubtitleText
                    className={name === 'intro' || name === 'vibe' ? styles.section__title_right : undefined}
                >
                    {title}
                </SubtitleText>

                <NormalText
                    className={clsx(styles.section__text, {
                        [styles.section__text_right]: name === 'intro' || name === 'vibe'
                    })}
                >
                    {text}
                </NormalText>

                {children &&
                    <NormalText
                        className={clsx(styles.section__text, {
                            [styles.section__text_right]: name === 'intro' || name === 'vibe'
                        })}
                    >
                        {children}
                    </NormalText>
                }

                {hasButton && 
                    <Button
                        className={styles.section__button}
                        label='read more'
                        onClick={handleOnClick}
                    />
                }
            </div>

            <div
                className={clsx(styles.section__wrapper, {
                    [styles.section__wrapper_right]: name === 'intro' || name === 'vibe',
                    [styles.section__wrapper_left]: name === 'flowers',
                    // [styles.section__container_slideRight]: isVisible && (name === 'intro' || name === 'vibe'),
                    // [styles.section__container_slideLeft]: isVisible && name === 'flowers',
                })}
                ref={wrapperRef}
            >
                <Image
                    className={clsx(styles.section__image, styles[`section__image_${name}`])}
                    src={image}
                    alt={imageDescription}
                />
            </div>
        </div>
    )
}