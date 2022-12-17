import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./reducers";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
