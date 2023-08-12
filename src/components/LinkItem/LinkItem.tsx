import React from "react"
import styles from './LinkItem.module.scss'
import Link from "next/link"
import { ERoute } from "@/constants"
import clsx from "clsx"

interface ILinkItemProps {
    route: ERoute
    name: string | React.ReactNode
    isActive: boolean
    className?: string
}

export const LinkItem: React.FC<ILinkItemProps> = ({ route, name, isActive, className }) => {
    return (
        <Link
            className={clsx(styles.linkItem, className, {
                [styles.linkItem_active]: isActive
            })}
            href={route}
        >
            {name}
        </Link>
    )
}