// 기존 redux의 index
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import chat from "@store/reducers/chat";

const persisConfig = {
  key: "root",
  storage,
  whitelist: []
  // or
  // blacklist: ['recycle']
};

export const rootReducer = combineReducers({
  chat,
});

export const persistedReducer = persistReducer(persisConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
