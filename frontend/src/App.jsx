import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/card' element={<Card/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
