import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shipping from './pages/Shipping';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shipping' element={<Shipping />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
