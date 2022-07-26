import './App.css';
import React,{useState,useEffect} from "react"
import MainPage from './Component/MainPage';
import {Routes,Route} from "react-router-dom"
import NavBar from './Component/NavBar/NavBar';
import BookPage from './Component/BookPage';
import Room from "./Component/Room/index"
import ReadingListPage from "./Component/ReadingListPage/index"
import {useDispatch} from "react-redux"
import {loginAction} from "./Component/Redux/Reducers/logIn/index"

function App() {
  const dispatch =useDispatch()
 
  useEffect(()=>{
    if (localStorage.getItem("isLoggedIn")==="true") {
      dispatch(loginAction(JSON.parse(localStorage.getItem("token"))))
      
    }
  },[])

  return (
    <div className="App">
      <header className="App-header">
        
        
        <NavBar  />
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path="/:bookId" element={<BookPage/>}/>
          <Route path="/rooms" element={<Room/>}/>
          <Route path="/readinglist" element={<ReadingListPage/>}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
