import { applyMiddleware, createStore } from "redux";
import  {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {
  languageReducer,

} from "./reducers.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "learning-system",
  storage,
};
const middleware = [thunk];

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    language: languageReducer,
   
  })
);
const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(...middleware)));

const persistor = persistStore(store);

export default store;
export { persistor };
