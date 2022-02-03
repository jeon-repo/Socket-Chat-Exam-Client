// 기존 redux의 index
import { combineReducers } from "redux";
import disposable from "@store/reducers/disposable";
import recycle from '@store/reducers/recycle'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

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
});

export const persistedReducer = persistReducer(persisConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
