/* eslint-disable import/no-extraneous-dependencies */
import {
  applyMiddleware,
  createStore,
  Middleware,
  Reducer,
  Store,
  StoreEnhancer,
} from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { rootReducer, persistedReducer } from "./reducers";

// redux-sage를 위한 index, 기존 redux의 index는 reducers로 이동
const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV === "development") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<Store> = () => {
  const isServer = typeof window === "undefined";
  // 서버와 클라이언트의 reducer를 인자로 받아 저장소 생성
  const getStore = (reducer: Reducer) => {
    return createStore(reducer, {}, bindMiddleware([]));
  };
  if (isServer) {
    // return createStore(rootReducer, {}, bindMiddleware([]));
    return getStore(rootReducer);
  }
  // const store = createStore(persistedReducer, {}, bindMiddleware([]));
  // state 유지 관리를 위한 persist 저장소 생성
  const store = getStore(persistedReducer);
  const persistor = persistStore(store);
  return { persistor, ...store };
};

// 최상위 컴포넌트 랩핑을 위해 획득한 저장소로 래퍼 생성
export const wrapper = createWrapper<Store>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
