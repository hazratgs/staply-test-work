import React, { Fragment } from 'react'
import checkout from '../utils/checkout'
import cn from 'classnames'
import styles from './Invoice.module.css'

const Invoice = ({
  options,
  selected,
  selectedAdditionally,
  additionallyOptions,
}) => {
  const [option] = options.filter(item => item.id === selected)
  const allSelectedAdditionally = additionallyOptions.filter(item =>
    selectedAdditionally.includes(item.id)
  )
  const items = [option, ...allSelectedAdditionally]
  const total = checkout(items)

  return (
    <Fragment>
      <div className={styles.topBlock}>
        <div className={styles.title}>Интернет для бизнеса</div>
        {items.map(item => (
          <div key={item.id} className={styles.row}>
            <span className={styles.rowLeft}>{item.name}</span>
            <span className={styles.rowRight}>
              {item.amount} {item.caption}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.title}>Итого</div>
        {total.map(item => (
          <div key={item.name} className={cn(styles.row, styles.boldRow)}>
            <span className={styles.rowLeft}>{item.name}</span>
            <span className={styles.rowRight}>{item.amount} руб.</span>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default Invoice
