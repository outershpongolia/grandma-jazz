'use client'
import React from "react"
import styles from './Button.module.scss'
import clsx from "clsx"

interface IButtonProps {
    label: string | React.ReactNode
    onClick: () => void
    isDisabled?: boolean
    reversedColors?: boolean
    className?: string
}

export const Button: React.FC<IButtonProps> = ({ label, onClick, isDisabled, reversedColors, className}) => {
    return (
        <button
            className={clsx(styles.button, className, {
                [styles.button_white]: reversedColors
            })}
            type="button"
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}