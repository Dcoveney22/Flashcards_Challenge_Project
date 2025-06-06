import { createSlice } from "@reduxjs/toolkit";

//create slice
export const quizzesSlice = createSlice({
  //name it
  name: "quizzes",
  //create the intial state as per the problem
  initialState: {
    quizzes: {}
  },
  // create redicer and function?
  reducers: {
    //add Quiz function?
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

export const selectQuiz = (state) => {
  return state.quizzes.quizzes;
};

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
