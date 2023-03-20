import { createSlice } from "@reduxjs/toolkit";
export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLading: false,
  },
  reducers: {
    //목록호출
    getCatsFetch: (state) => {
      console.log("3. 목록호출:getCatsFetch 실행");
      state.isLading = true;
    },
    //목록호출 성공
    getCatsSuccess: (state, action) => {
      console.log("호출성공");
      state.isLading = false;
      state.cats = action.payload;
    },
    //목록호출 실패
    getCatsFailure: (state) => {
      console.log("호출실패");
    },
  },
});
export const { getCatsFetch, getCatsSuccess, getCatsFailure } =
  catSlice.actions;
export default catSlice.reducer;
