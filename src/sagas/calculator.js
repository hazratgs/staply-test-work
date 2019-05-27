import { takeLatest, put, select } from 'redux-saga/effects'
import includedAdditionally from 'utils/includedAdditionally'
import * as actions from '../actions/calculator'

function* changeOptions() {
  try {
    // Remove active options included in the tariff
    const state = yield select()
    const {
      selected,
      selectedAdditionally,
      options,
      additionallyOptions,
    } = state.calculator
    const [option] = options.filter(item => item.id === selected)

    const included = includedAdditionally(option, additionallyOptions)
    const update = selectedAdditionally.filter(item => !included.includes(item))

    yield put(actions.addAdditionallyOptions(update))
  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.changeOptions, changeOptions)
}
