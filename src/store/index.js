import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import reducer from "./reducers"; 
import rootSaga from "./sagas";



const initializeStore = (preloadedState ={}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store =  configureStore({
        reducer,
        preloadedState,
    })

    sagaMiddleware.run(rootSaga);
    return store
}


export default initializeStore;