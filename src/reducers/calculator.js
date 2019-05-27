import { createReducer } from 'redux-act'
import * as actions from '../actions/calculator'

const initialState = {
  selected: 1,
  selectedAdditionally: [],
  options: [
    {
      id: 1,
      name: 'Тариф S',
      amount: 1000,
      caption: 'руб./мес.',
      included: [],
    },
    {
      id: 2,
      name: 'Тариф M',
      amount: 2000,
      caption: 'руб./мес.',
      included: [],
    },
    {
      id: 3,
      name: 'Тариф L (Статический IP адрес в составе пакета)',
      amount: 3000,
      caption: 'руб./мес.',
      included: [701],
    },
  ],
  additionallyOptions: [
    {
      id: 701,
      editable: true,
      fixed: true,
      connect: [702],
      name: 'Подключение статического IP-адреса',
      caption: 'руб.',
      amount: 145.5,
    },
    {
      id: 702,
      editable: false,
      name: 'Абонентская плата за статический IP-адрес',
      caption: 'руб./мес.',
      amount: 92,
    },
  ],
}

const handleChangeOptions = (state, payload) => ({
  ...state,
  selected: payload,
})

const handleAdditionallyOptions = (state, payload) => ({
  ...state,
  selectedAdditionally: payload,
})

const reducer = createReducer(
  {
    [actions.changeOptions]: handleChangeOptions,
    [actions.addAdditionallyOptions]: handleAdditionallyOptions,
  },
  initialState
)

export default reducer
