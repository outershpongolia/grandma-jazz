import React from 'react'
import styles from './vibe.module.scss'

interface IVibeProps {}

const Vibe: React.FC<IVibeProps> = () => {
    return (
        <div className={styles.vibe}>
            Vibe
        </div>
    )
}

export default Vibe