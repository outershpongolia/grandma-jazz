import React from 'react'
import styles from './Popup.module.scss'
import { MdClose } from 'react-icons/md'
import clsx from 'clsx'

interface IPopupProps {
    name: string
    type: string
    description: string
    feeling: string
    flavour: string
    help: string
    close: () => void
}

export const Popup: React.FC<IPopupProps> = ({ name, type, description, feeling, flavour, help, close }) => {
    return (
        <div className={styles.popup__wrapper}>
            <div className={styles.popup}>
                <div className={styles.popup__videoWrapper}></div>

                <div className={styles.popup__textWrapper}>
                    <div className={clsx(styles.popup__text, styles.popup__text_name, 'text__subtitle')}>{name}</div>

                    <div className={clsx(styles.popup__text, styles.popup__text_type, 'text__normal')}>({type})</div>

                    <div className={clsx(styles.popup__text, 'text__normal')}>{description}</div>

                    <div className={clsx(styles.popup__text, 'text__normal')}>
                        <span className={clsx(styles.popup__text, styles.popup__text_label, 'text__normal')}>feeling:</span>
                        {feeling}
                    </div>

                    <div className={clsx(styles.popup__text, 'text__normal')}>
                        <span className={clsx(styles.popup__text, styles.popup__text_label, 'text__normal')}>flavours:</span>
                        {flavour}
                    </div>

                    <div className={clsx(styles.popup__text, 'text__normal')}>
                        <span className={clsx(styles.popup__text, styles.popup__text_label, 'text__normal')}>helps:</span>
                        {help}
                    </div>

                    <div className={clsx(styles.popup__text, 'text__normal')}></div>

                    <div className={clsx(styles.popup__text, 'text__normal')}></div>
                </div>

                <MdClose className={styles.popup__close} onClick={close} />
            </div>
        </div>
    )
}