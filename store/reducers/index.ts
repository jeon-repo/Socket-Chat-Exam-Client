// 기존 redux의 index
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import disposable from "@store/reducers/disposable";
import recycle from '@store/reducers/recycle';
import isView from "@store/reducers/isView";

const persisConfig = {
  key: "root",
  storage,
  whitelist: ['recycle']
  // or
  // blacklist: ['recycle']
};

export const rootReducer = combineReducers({
  disposable,
  recycle,
  isView,
});

export const persistedReducer = persistReducer(persisConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
