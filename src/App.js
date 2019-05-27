import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeOptions, addAdditionallyOptions } from 'actions/calculator'
import styles from './App.module.css'
import Options from 'components/Options'
import Invoice from 'components/Invoice'

class App extends PureComponent {
  render() {
    const {
      options,
      selected,
      selectedAdditionally,
      additionallyOptions,
      changeOptions,
      addAdditionallyOptions,
    } = this.props

    return (
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <Options
            options={options}
            selected={selected}
            selectedAdditionally={selectedAdditionally}
            additionallyOptions={additionallyOptions}
            handleOptions={changeOptions}
            handleAdditionallyOptions={addAdditionallyOptions}
          />
        </div>
        <div className={styles.rightColumn}>
          <Invoice
            options={options}
            selected={selected}
            selectedAdditionally={selectedAdditionally}
            additionallyOptions={additionallyOptions}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    options: state.calculator.options,
    additionallyOptions: state.calculator.additionallyOptions,
    selected: state.calculator.selected,
    selectedAdditionally: state.calculator.selectedAdditionally,
  }),
  dispatch =>
    bindActionCreators(
      {
        changeOptions,
        addAdditionallyOptions,
      },
      dispatch
    )
)(App)
