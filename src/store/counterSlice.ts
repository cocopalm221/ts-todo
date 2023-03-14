import { createSlice } from "@reduxjs/toolkit";
//action: 함수로서 store의 state를 업데이트한다.
import type { PayloadAction } from "@reduxjs/toolkit";
//초기값의 타입 정의
export type CounterState = {
  value: number;
};
//storedml state의 초기값 셋팅
const initialState: CounterState = {
  value: 0,
};
//실제 활용할 slice 생성함
export const counterSlice = createSlice({
  //slice의 이름
  name: "counter",
  //slice의 초기값
  // initialState: initialState,
  initialState,
  //리듀서들을 배치함
  reducers: {
    //더하기 액션
    increment: () => {},
    //빼기 액션
    decrement: () => {},
    //일정한 수 만큼 증감
    //action:PayloadAction<T>
    incrementByAmout: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

//액션을 내보낸다.
export const { increment, decrement, incrementByAmout } = counterSlice.actions;
//slice의 reducer를 내보낸다.
export default counterSlice.reducer;
