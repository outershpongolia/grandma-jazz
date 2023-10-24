'use client'
import React from "react"
import styles from './MobileMenu.module.scss'
import { ERoute } from "@/constants"
import { LinkItem } from "../LinkItem/LinkItem"
import { usePathname } from "next/navigation"
import { PiFlowerLotus, PiCoffee, PiMusicNotes } from 'react-icons/pi'
import { GiVillage } from 'react-icons/gi'
import { RxHome } from 'react-icons/rx'
import clsx from "clsx"

interface IMobileMenuProps {
    open: boolean
}

export const MobileMenu: React.FC<IMobileMenuProps> = ({ open }) => {
    const pathname = usePathname()
    
    return (
        <div className={clsx(styles.mobileMenu, {
            [styles.mobileMenu_open]: open
        })}>
            <div className={clsx(styles.mobileMenu__links, {
                [styles.mobileMenu__links_open]: open
            })}>
                <LinkItem
                    className={styles.mobileMenu__link}
                    route={ERoute.HOME}
                    name={
                        <div className={styles.mobileMenu__title}>
                            Home <RxHome />
                        </div>
                    }
                    isActive={pathname === ERoute.HOME}
                />

                <LinkItem
                    className={styles.mobileMenu__link}
                    route={ERoute.FLOWERS}
                    name={
                        <div className={styles.mobileMenu__title}>
                            Flowers <PiFlowerLotus />
                        </div>
                    }
                    isActive={pathname === ERoute.FLOWERS}
                />

                <LinkItem
                    className={styles.mobileMenu__link}
                    route={ERoute.VIBE}
                    name={
                        <div className={styles.mobileMenu__title}>
                            Vibe <PiMusicNotes />
                        </div>
                    }
                    isActive={pathname === ERoute.VIBE}
                />

                <LinkItem
                    className={styles.mobileMenu__link}
                    route={ERoute.REFRESHMENTS}
                    name={
                        <div className={styles.mobileMenu__title}>
                            Refreshments <PiCoffee /> 
                        </div>
                    }
                    isActive={pathname === ERoute.REFRESHMENTS}
                />

                <LinkItem
                    className={styles.mobileMenu__link}
                    route={ERoute.VISION}
                    name={
                        <div className={styles.mobileMenu__title}>
                            Vision <GiVillage />
                        </div>
                    }
                    isActive={pathname === ERoute.VISION}
                />
            </div>
        </div>
    )
}