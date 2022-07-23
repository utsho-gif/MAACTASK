import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Footer from './pages/shared/Footer';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
