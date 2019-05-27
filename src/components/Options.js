import React, { Fragment } from 'react'
import includedAdditionally from 'utils/includedAdditionally'
import tableStyles from './Table.module.css'
import styles from './Options.module.css'

import Title from './Title'
import RadioButton from './RadioButton'
import Checkbox from './Checkbox'

const Options = ({
  options,
  selected,
  selectedAdditionally,
  additionallyOptions,
  handleOptions,
  handleAdditionallyOptions,
}) => {
  // Hide options included in the tariff
  const [option] = options.filter(item => item.id === selected)
  const included = includedAdditionally(option, additionallyOptions)

  const items = additionallyOptions
    .map(item => {
      if (included.includes(item.id)) return null
      return (
        <Checkbox
          key={item.id}
          id={item.id}
          editable={item.editable}
          name={item.name}
          amount={item.amount}
          caption={item.caption}
          handle={() => {
            const options = [item.id, ...item.connect]
            if (selectedAdditionally.includes(item.id)) {
              handleAdditionallyOptions(
                selectedAdditionally.filter(item => options.includes(item.id))
              )
            } else {
              handleAdditionallyOptions([...selectedAdditionally, ...options])
            }
          }}
          checked={selectedAdditionally.includes(item.id)}
        />
      )
    })
    .filter(item => item)

  return (
    <div className={styles.wrapper}>
      <table className={tableStyles.table}>
        <tbody>
          <Title title="Выберите тариф" />
          <RadioButton
            radioOptions={options}
            handle={handleOptions}
            selected={selected}
          />
          {items.length ? (
            <Fragment>
              <Title title="Выберите дополнительные опции" />
              {items}
            </Fragment>
          ) : null}
        </tbody>
      </table>
    </div>
  )
}

export default Options
