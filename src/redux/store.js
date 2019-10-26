import { createStore, applyMiddleware } from 'redux';

// Declare persistStore
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

// Persistor is essentially a persisted version of store
const persistor = persistStore(store);

// Can use one of them
export { store, persistor };
