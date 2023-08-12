import React from "react"
import styles from './FooterIcon.module.scss'
import Link from "next/link"

interface IFooterIconProps {
    link: string
    icon: React.ReactNode
}

export const FooterIcon: React.FC<IFooterIconProps> = ({ link, icon }) => {
    return (
        <Link
            className={styles.footerIcon}
            href={link}
        >
            {icon}
        </Link>
    )
}