import React from 'react'
import styles from './Footer.module.scss'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FooterIcon } from '../FooterIcon/FooterIcon'

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__icons}>
                <FooterIcon
                    link=''
                    icon={<BsInstagram className={styles.footer__icon} />}
                />
                
                <FooterIcon
                    link=''
                    icon={<BsTwitter className={styles.footer__icon} />}
                />

                <FooterIcon
                    link=''
                    icon={<BsFacebook className={styles.footer__icon} />}
                />
            </div>

            <div className={styles.footer__text}>© 2023 Grandma Jazz | All rights reserved</div>
        </div>
    )
}