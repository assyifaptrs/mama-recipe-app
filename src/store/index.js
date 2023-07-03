import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../store/reducers/index';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(logger, thunk, promiseMiddleware);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
