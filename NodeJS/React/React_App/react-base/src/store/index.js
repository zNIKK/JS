// OLD REDUX:

// import { legacy_createStore as createStore } from "redux";

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "redux-saga";

import persistedReducers from "./modules/reduxPersist";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers,
  middleware: [sagaMiddleware],
  // possivel erro:

  // middleware: {
  //   applyMiddleware: sagaMiddleware,
  // },
});

sagaMiddleware.run(rootSaga);
export const presistor = persistStore(store);
export default store;
