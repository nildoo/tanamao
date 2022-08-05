import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './sagas'

import authReducer from './ducks/authSlice'
import userReducer from './ducks/userSlice'
import historyReducer from './ducks/historySlice'
import bannerReducer from './ducks/bannerSlice'
import categoryReducer from './ducks/categorySlice'
import storeReducer from './ducks/storeSlice'
import favoriteReducer from './ducks/favoriteSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    history: historyReducer,
    banner: bannerReducer,
    category: categoryReducer,
    store: storeReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
