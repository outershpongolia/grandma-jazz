import React from "react"
import styles from './refreshments.module.scss'

interface IRefreshmentsProps {}

const Refreshments: React.FC<IRefreshmentsProps> = () => {
    return (
        <div className={styles.refreshments}>
            Refreshments
        </div>
    )
}

export default Refreshments