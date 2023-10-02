import React from 'react'
import styles from './Footer.module.scss'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'
import { BiLogoTelegram, BiLogoTiktok } from 'react-icons/bi'

import { FooterIcon } from '../FooterIcon/FooterIcon'

interface IFooterProps {}

const instagramLink = 'https://www.instagram.com/grandmajazzphuket/'
const facebookLink = 'https://www.facebook.com/Grandmajazzphuket'
const telegramLink = 'https://t.me/grandmajazz'
const tiktokLink = 'https://www.tiktok.com/@grandmajazzphuket?_t=8g1yFRmAAuw&_r=1'

export const Footer: React.FC<IFooterProps> = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__icons}>
                <FooterIcon
                    link={instagramLink}
                    icon={<BsInstagram className={styles.footer__icon} />}
                />
                
                {/* <FooterIcon
                    link=''
                    icon={<BsTwitter className={styles.footer__icon} />}
                /> */}

                <FooterIcon
                    link={facebookLink}
                    icon={<BsFacebook className={styles.footer__icon} />}
                />

                <FooterIcon
                    link={telegramLink}
                    icon={<BiLogoTelegram className={styles.footer__icon} />}
                />

                <FooterIcon
                    link={tiktokLink}
                    icon={<BiLogoTiktok className={styles.footer__icon} />}
                />
            </div>

            <div className={styles.footer__text}>© 2023 Grandma Jazz | All rights reserved</div>
        </div>
    )
}