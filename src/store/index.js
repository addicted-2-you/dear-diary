import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// reducers
import financesReducer from './finances/finances.slice';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { finances: financesReducer },

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
