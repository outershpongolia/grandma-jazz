'use client'
import React, { useCallback, useEffect, useState } from "react"
import styles from './Header.module.scss'
import Image from "next/image"
import logo from '../../../public/images/logo-2.jpeg'
import { LinkItem } from "../LinkItem/LinkItem"
import { ERoute } from "@/constants"
import { usePathname } from "next/navigation"
import { MobileMenu } from "../MobileMenu/MobileMenu"
import { FaBars, FaTimes } from 'react-icons/fa'

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false)
  const [ isScreenSmall, setIsScreenSmall ] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      setIsMobileMenuOpen(false)
    }
  }, [pathname, setIsMobileMenuOpen])

  useEffect(() => {
    if (window) {
      const smallScreen = matchMedia('(max-width: 640px)')

      setIsScreenSmall(smallScreen.matches)
    }
  }, [setIsScreenSmall])

  const handleToggleMenu = useCallback(() => {
    setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen)
  }, [setIsMobileMenuOpen])

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Image
          src={logo}
          alt="Grandma Jazz logo"
          fill={true}
          style={{borderRadius: '8px'}}
        />
      </div>

      {isScreenSmall
      ? <div
        className={styles.header__menu}
        onClick={handleToggleMenu}
      >
        {isMobileMenuOpen ? <FaTimes className={styles.header__icon} /> : <FaBars className={styles.header__icon} />}
      </div>
      : <div className={styles.header__links}>
          <LinkItem
            route={ERoute.HOME}
            name='Home'
            isActive={pathname === ERoute.HOME}
          />

          <LinkItem
            route={ERoute.FLOWERS}
            name='Flowers'
            isActive={pathname === ERoute.FLOWERS}
          />

          <LinkItem
            route={ERoute.VIBE}
            name='Vibe'
            isActive={pathname === ERoute.VIBE}
          />

          <LinkItem
            route={ERoute.REFRESHMENTS}
            name='Refreshments'
            isActive={pathname === ERoute.REFRESHMENTS}
          />

          <LinkItem
            route={ERoute.VISION}
            name='Vision'
            isActive={pathname === ERoute.VISION}
          />
        </div>
      }

      <MobileMenu open={isMobileMenuOpen} />
    </div>
  )
}