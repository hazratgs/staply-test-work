import { all, fork } from 'redux-saga/effects'
import calculator from './calculator'

export default function* rootSaga() {
  return yield all([calculator].map(fork))
}
