import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const composedEnhancers = compose(applyMiddleware(sagaMiddleware))

  const store = createStore(rootReducer, initialState, composedEnhancers)

  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}
