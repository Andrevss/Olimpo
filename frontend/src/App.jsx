import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shipping from './pages/Shipping';
import { CartProvider } from './context/CartProvider';
import Pending from './pages/Pending';
import Rejected from './pages/Rejected';
import Approved from './pages/Approved';
import Details from './pages/Details';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/product/:slug' element={<Details />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/pending' element={<Pending />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/rejected' element={<Rejected />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
