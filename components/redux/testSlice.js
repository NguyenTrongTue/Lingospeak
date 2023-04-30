import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tests: [],
  score: 0,
  level: "b1",
  type: "",
  pass: true,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    getTest: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    selectLevel: (state, action) => {
      state.level = action.payload;
    },
    selectType: (state, action) => {
      state.type = action.payload;
    },
    isPass: (state, action) => {
      const { score, level } = action.payload;
      switch (level) {
        case "a1":
          state.pass = score >= 0.01 ? true : false;
          break;
        case "a2":
          state.pass = score >= 0.02 ? true : false;
          break;
        case "b1":
          state.pass = score >= 0.04 ? true : false;
          break;
        default:
          state.pass = score >= 0.05 ? true : false;
          break;
      }
    },
  },
});

export const { getTest, setScore, selectLevel, selectType, isPass } =
  userSlice.actions;
export default userSlice.reducer;
