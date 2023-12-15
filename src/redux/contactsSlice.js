import { configureStore }  from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = configureStore({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
