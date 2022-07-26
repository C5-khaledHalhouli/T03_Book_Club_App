import './App.css';
import React,{useState,useEffect} from "react"
import MainPage from './Component/MainPage';
import {Routes,Route} from "react-router-dom"
import NavBar from './Component/NavBar/NavBar';
import BookPage from './Component/BookPage';
import Room from "./Component/Room/index"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  useEffect(()=>{
    if (localStorage.getItem("isLoggedIn")==="true") {
      
      setIsLoggedIn(localStorage.getItem("isLoggedIn"));
    }
  },[])

  return (
    <div className="App">
      <header className="App-header">
        
        
        <NavBar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path='/' element={<MainPage isLoggedIn={isLoggedIn}/>}/>
          <Route path="/:bookId" element={<BookPage/>}/>
          <Route path="/rooms" element={<Room/>}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
