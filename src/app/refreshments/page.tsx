import React from "react"
import styles from './refreshments.module.scss'
import clsx from "clsx"
import Image from "next/image"

// Images
import coffeeImage from '../../../public/images/coffee.jpg'
import teaImage from '../../../public/images/tea.jpg'
import cakeImage from '../../../public/images/cake.jpg'

interface IRefreshmentsProps {}

const Refreshments: React.FC<IRefreshmentsProps> = () => {
  return (
    <div className={styles.refreshments}>

      {/* Header */}
      <div className={styles.refreshments__header}>
        <div className={clsx(styles.refreshments__title, "text__title")}>
          our local refreshments
        </div>

        <div className={clsx(styles.refreshments__headerText, "text__normal")}>
          Keeping you hydrated just the way the Grandma suggested.
        </div>
      </div>

      <div className={styles.refreshments__wrapper}>
        {/* List */}
        <div className={styles.refreshments__list}>

          {/* Coffee */}
          <div className={styles.refreshments__item}>
            <div className={styles.refreshments__textWrapper}>
              <div className={clsx(styles.refreshments__subtitle, "text__subtitle")}>coffee</div>

              <div className="text__normal">
                Imagine the sound of a ball of ice, splitting as locally sourced coffee is poured into a whiskey glass.
              </div>
            </div>

            <Image
              className={clsx(styles.refreshments__image, styles.refreshments__image_coffee)}
              src={coffeeImage}
              alt=''
              width={240}
              height={240}
            />
          </div>

          {/* Tea */}
          <div className={clsx(styles.refreshments__item, styles.refreshments__item_tea)}>
            <div className={styles.refreshments__textWrapper}>
              <div className={clsx(styles.refreshments__subtitle, "text__subtitle")}>tea</div>

              <div className="text__normal">
                Grandma celebrates tea with character, each packing colour & a wealth of health benefits. We select fresh ingredients for a refreshing infusion, served over ice or hot.
              </div>
            </div>

            <Image
              className={clsx(styles.refreshments__image, styles.refreshments__image_tea)}
              src={teaImage}
              alt=''
              width={340}
              height={340}
            />
          </div>

          {/* Cake */}
          <div className={styles.refreshments__item}>
            <div className={styles.refreshments__textWrapper}>
              <div className={clsx(styles.refreshments__subtitle, "text__subtitle")}>bakery</div>

              <div className="text__normal">
                Feeling hungry? With 100% plant based love & care put into our baking…Grandma's homemade brownie will leave you wanting more. Replacing sugar with fresh Thai dates, it delivers on the sweetness.
              </div>
            </div>

            <Image
              className={clsx(styles.refreshments__image, styles.refreshments__image_cake)}
              src={cakeImage}
              alt=''
              width={240}
              height={240}
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Refreshments