'use client'
import React from "react"
import styles from './Button.module.scss'
import clsx from "clsx"

interface IButtonProps {
    label: string | React.ReactNode
    onClick: () => void
    isDisabled?: boolean
    version?: "white" | "icon"
    className?: string
}

export const Button: React.FC<IButtonProps> = ({ label, onClick, isDisabled, version, className}) => {
    return (
        <button
            className={clsx(styles.button, styles[`button_${version}`], className)}
            type="button"
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}