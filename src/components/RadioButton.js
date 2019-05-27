import React, { Fragment } from 'react'
import cn from 'classnames'
import tableStyles from './Table.module.css'

import Price from 'components/Price'

const RadioButton = ({ radioOptions, selected, handle }) => {
  const items = radioOptions.map(option => {
    const active = selected === option.id

    return (
      <tr key={option.id}>
        <td
          className={cn(tableStyles.field, {
            [tableStyles.fieldActive]: active,
          })}
        >
          <label>
            <input
              className={tableStyles.input}
              name="tariff"
              type="radio"
              checked={active}
              onChange={() => handle(option.id)}
            />
            {option.name}
          </label>
        </td>
        <td
          className={cn(tableStyles.field, tableStyles.rightField, {
            [tableStyles.fieldActive]: active,
          })}
        >
          <Price amount={option.amount} caption={option.caption} />
        </td>
      </tr>
    )
  })

  return <Fragment>{items}</Fragment>
}

export default RadioButton
