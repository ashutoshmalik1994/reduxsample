import  rootReducer  from "../reducer/reducer";
import { configureStore } from '@reduxjs/toolkit';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = configureStore({reducer: rootReducer});

export default store;   