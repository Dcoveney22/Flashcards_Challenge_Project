import { createSlice } from "@reduxjs/toolkit";

const initialState = { cards: {} };

export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  addCard: (state, action) => {
    const { id } = action.payload;
    state.cards[id] = action.payload;
  }
});

export const selectCardById = (id) => (state) => state.cards.cards[id];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
