import React from "react"
import styles from './refreshments.module.scss'
import { TeaSvg } from "../../../public/svgs/TeaSvg"
import { CakeSvg } from "../../../public/svgs/CakeSvg"
import { CoffeeSvg } from "../../../public/svgs/CoffeeSvg"
import clsx from "clsx"

interface IRefreshmentsProps {}

const Refreshments: React.FC<IRefreshmentsProps> = () => {
  return (
    <div className={styles.refreshments}>

      {/* Header */}
      <div className={styles.refreshments__header}>
        <div className="text__title">
          Our local refreshments.
        </div>

        <div className={clsx(styles.refreshments__headerText, "text__normal")}>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.
        </div>
      </div>

      <div className={styles.refreshments__wrapper}>
        {/* List */}
        <div className={styles.refreshments__list}>

          {/* Coffee */}
          <div className={styles.refreshments__item}>
            <div className={styles.refreshments__textWrapper}>
              <div className={clsx(styles.refreshments__subtitle, "text__subtitle")}>Coffee</div>

              <div className="text__normal">
                Imagine the sound of a ball of ice, splitting as locally sourced coffee is poured into a whiskey glass.
              </div>
            </div>

            <CoffeeSvg />
          </div>

          {/* Tea */}
          <div className={clsx(styles.refreshments__item, styles.refreshments__item_tea)}>
            <div className={styles.refreshments__textWrapper}>
              <div className={clsx(styles.refreshments__subtitle, "text__subtitle")}>Tea</div>

              <div className="text__normal">
                Grandma celebrates tea with character, each packing colour & a wealth of health benefits. We select fresh ingredients for a refreshing infusion, served over ice or hot.
              </div>
            </div>

            <TeaSvg />
          </div>

          {/* Cake */}
          <div className={styles.refreshments__item}>
            <div className={styles.refreshments__textWrapper}>
              <div className={clsx(styles.refreshments__subtitle, "text__subtitle")}>Bakery</div>

              <div className="text__normal">
                Feeling hungry? With 100% plant based love & care put into our baking…Grandma's homemade brownie will leave you wanting more. Replacing sugar with fresh Thai dates, it delivers on the sweetness.
              </div>
            </div>

            <CakeSvg />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Refreshments