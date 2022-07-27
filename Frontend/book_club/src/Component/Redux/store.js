import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Reducers/logIn/index"
import bookReducer from "./Reducers/book";
export default configureStore({
reducer:{
login:loginReducer,
book:bookReducer
}
})