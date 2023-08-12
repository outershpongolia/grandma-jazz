import React from "react"
import styles from './vision.module.scss'

interface IVisionProps {}

const Vision: React.FC<IVisionProps> = () => {
    return (
        <div className={styles.vision}>
            Vision
        </div>
    )
}

export default Vision