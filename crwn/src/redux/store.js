import { createStore, applyMiddleware } from 'redux';

// Declare persistStore
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// Persistor is essentially a persisted version of store
const persistor = persistStore(store);

// Can use one of them
export { store, persistor };
