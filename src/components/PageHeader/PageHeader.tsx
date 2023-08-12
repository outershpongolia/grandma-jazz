import React from "react"
import styles from './PageHeader.module.scss'
import Image, { StaticImageData } from "next/image"
import clsx from "clsx"
import { TitleText } from "@/ui/Text/Text"

interface IPageHeaderProps {
    image: StaticImageData
    imageDescription: string
    title: string
    text?: string
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ image, imageDescription, title, text }) => {
    return (
        <div className={styles.pageHeader}>
            <Image
                className={styles.pageHeader__image}
                src={image}
                alt={imageDescription}
            />

            <div className={styles.pageHeader__shadow}></div>

            <TitleText className={styles.pageHeader__text}>{title}</TitleText>

            {text &&
                <div
                    className={clsx(styles.pageHeader__description, styles.pageHeader__text)}
                >
                    {text}
                </div>
            }
        </div>
    )
}