  import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Search from './Pages/Search';
import Home from './Pages/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
