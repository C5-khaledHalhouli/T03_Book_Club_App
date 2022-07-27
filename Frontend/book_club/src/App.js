import "./App.css";
import React, { useState, useEffect } from "react";
import MainPage from "./Component/MainPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import BookPage from "./Component/BookPage";
import Room from "./Component/Room/index";
import ReadingListPage from "./Component/ReadingListPage/index";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./Component/Redux/Reducers/logIn/index";
import { getAllBooks,getReader } from "./Component/Redux/Reducers/book/index";
import AdminPage from "./Component/AdminPage/index"
import {getAllRooms} from "./Component/Redux/Reducers/room/index"
import RoomTable from "./Component/RoomTable";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      token: state.login.token,
    };
  });
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      dispatch(loginAction(JSON.parse(localStorage.getItem("token"))));
    }
    axios
      .get("http://localhost:5000/book")
      .then((result) => {
        dispatch(getAllBooks(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/book/readers/", {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {
       
       dispatch(getReader(result.data))
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("http://localhost:5000/room")
      .then((result) => {
       console.log(result);
       dispatch(getAllRooms(result.data))
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:bookId" element={<BookPage />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/readinglist" element={<ReadingListPage />} />
          <Route path="/AdminPage"  element={<AdminPage/>}/>
          <Route path="/roomsTable"  element={<RoomTable/>}/>

        </Routes>
      </header>
    </div>
  );
}

export default App;
