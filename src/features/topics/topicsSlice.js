import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = { topics: {} };

//Step 5
export const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    }
  },
  extraReducers: {
    "quizzes/addQuiz": (state, action) => {
      const { topicId, id } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const selectTopics = (state) => {
  return state.topics.topics;
};

export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
