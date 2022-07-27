import { createSlice } from "@reduxjs/toolkit";

const book = createSlice({
  name: "book",
  initialState: {
    books: [],
    readingListBook: [],
  },
  reducers: {
    getAllBooks(state, action) {
      state.books = action.payload;
    },
    //   payload array of readingList
    addReadingListBook(state, action) {
      state.readingListBook = action.payload;
    },
    // payload id of readingbook
    deleteBookReadingList(state, action) {
      state.readingListBook = state.readingListBook.filter((element) => {
        return element._id !== action.payload;
      });
    },
    getReader
  },
});

export const { addReadingListBook, deleteBookReadingList, getAllBooks } =
  book.actions;
export default book.reducer;
