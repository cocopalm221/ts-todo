import { configureStore } from "@reduxjs/toolkit";
//slice 불러들임
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";
import todoReducer from "./todoSlice";
// persist 적용
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todo: todoReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const presistedReducer = persistReducer(persistConfig, reducers);

//store 생성
export const store = configureStore({
  // reducer: {
  //   //slice를 작성함
  //   counter: counterReducer,
  //   user: userReducer,
  // },
  reducer: presistedReducer,
  // 임시로 middleware 체크 기능 제거
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

//useSelector를 사용하는 경우에 지정할 타입을 작성
export type RootState = ReturnType<typeof store.getState>;
//useDispatch를 활용하는 경우에 지정할 타입 작성
export type AppDispatch = typeof store.dispatch;
