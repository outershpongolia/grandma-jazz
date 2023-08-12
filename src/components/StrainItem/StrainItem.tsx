import React from "react"
import styles from './StrainItem.module.scss'
import Image, { StaticImageData } from "next/image"

interface IStrainItemProps {
    title: string
    text: string
    image: StaticImageData
    note?: string
}

export const StrainItem: React.FC<IStrainItemProps> = ({ title, text, image, note }) => {
    return (
        <div className={styles.strainItem}>
            <div className={styles.strainItem__wrapper}>
                <Image
                    className={styles.strainItem__image}
                    src={image}
                    alt='Cannabis strain image'
                />
            </div>

            <div className={styles.strainItem__container}>
                <div className={styles.strainItem__title}>
                    {title}
                </div>

                {note &&
                    <div className={styles.strainItem__text}>
                        {note}
                    </div>
                }

                <div className={styles.strainItem__text}>
                    {text}
                </div>
            </div>
        </div>
    )
}