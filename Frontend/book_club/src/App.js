import './App.css';
import MainPage from './Component/MainPage';
import {Routes,Route} from "react-router-dom"
import NavBar from './Component/NavBar/NavBar';
import BookPage from './Component/BookPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <NavBar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/:bookId" element={<BookPage/>}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
