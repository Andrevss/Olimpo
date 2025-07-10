import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shipping from './pages/Shipping';
import { CartProvider } from './context/CartProvider';
import Pending from './pages/Pending';
import Rejected from './pages/Rejected';
import Approved from './pages/Approved';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/pending' element={<Pending />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/rejected' element={<Rejected />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
