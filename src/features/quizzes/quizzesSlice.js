import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//create slice
const quizzesSlice = {
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
      return action.payload;
    }
  }
};

export const selectQuiz = (state) => {
  return state.topics.topics;
};
