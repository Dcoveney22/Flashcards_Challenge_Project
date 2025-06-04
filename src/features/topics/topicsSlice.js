import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = { topics: {} };

//Step 5
const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = action.payload;
      state.topics[action.payload.id].quizIds = [];
    }
  }
});

export const selectTopics = (state) => {
  return state.topics.topics;
};

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
