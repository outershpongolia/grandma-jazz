import React, { useCallback, useState } from "react"
import styles from './StrainItem.module.scss'
import Image, { StaticImageData } from "next/image"
import { Popup } from "../Popup/Popup"

interface IStrainItemProps {
    title: string
    text: string
    image: StaticImageData
    type: string
    feeling: string
    flavour: string
    help: string
    note?: string
}

export const StrainItem: React.FC<IStrainItemProps> = ({ title, text, image, type, feeling, flavour, help, note }) => {
    const [ isPopupOpen, setIsPopupOpen ] = useState(false)

    const handleOpenPopup = useCallback(() => {
        setIsPopupOpen(true)
    }, [setIsPopupOpen])

    const handleClosePopup = useCallback(() => {
        setIsPopupOpen(false)
    }, [setIsPopupOpen])

    return (
        <>
            <div className={styles.strainItem} onClick={handleOpenPopup}>
                <div className={styles.strainItem__hover}>
                    See more
                </div>

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

            {isPopupOpen && 
                <Popup
                    name={title}
                    type={type}
                    description={text}
                    feeling={feeling}
                    flavour={flavour}
                    help={help}
                    close={handleClosePopup}
                />
            }
        </>
    )
}