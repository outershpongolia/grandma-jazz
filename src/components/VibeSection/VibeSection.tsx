import React from "react"
import styles from './VibeSection.module.scss'
import { Video } from "../Video/Video"
import { uniqueId } from "lodash"
import clsx from "clsx"

interface IVibeSectionProps {
  videos: string[]
  texts: string[]
  reversed?: boolean
}

export const VibeSection: React.FC<IVibeSectionProps> = ({ videos, texts, reversed }) => {
  return (
    <div
      className={clsx(styles.vibeSection, {
        [styles.vibeSection_reversed]: reversed
      })}
    >
      <div
        className={clsx(styles.vibeSection__columns, {
          [styles.vibeSection__columns_reversed]: reversed
        })}
      >
        {videos && videos.map(video => {
          return <Video key={uniqueId(video)} video={video} />
        })}
      </div>

      <div className={styles.vibeSection__columns}>
        <div className={styles.vibeSection__textWrapper}>
          {texts && texts.map(text => {
            return (
              <div
                key={uniqueId(text)}
                className={clsx(styles.vibeSection__text, 'text__normal', {
                  [styles.vibeSection__text_reversed]: reversed
                })}
              >
                {text}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}