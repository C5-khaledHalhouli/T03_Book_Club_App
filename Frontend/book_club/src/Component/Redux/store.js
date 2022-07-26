import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Reducers/logIn/index"

export default configureStore({
reducer:{
login:loginReducer
}
})