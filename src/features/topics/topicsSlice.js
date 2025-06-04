import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = { topic: {} };

//Step 5
const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducer: {
    addTopic: (state, action) => {
      const newTopic = {
        id: "",
        name: "",
        icon: "",
        quizID: []
      };
      state.topic.push(newTopic);
    }
  }
});

export const selectTopics = (state) => {
  return state.topics.topics;
};

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
