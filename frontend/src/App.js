import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap'
import LoginScreen from './pages/LoginScreen';
import ProductList from './components/ProductList';
import DeliveryList from './components/DeliveryList';
import OutOfStock from './components/OutOfStock';
import Stocks from './components/Stocks';


function App() {
  return (
    <>
    <Router>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/' element={<ProductList />} />
            <Route path='/deliverylist' element={<DeliveryList />} />
            <Route path='/outofstock' element={<OutOfStock />} />
            <Route path='/stocks' element={<Stocks />} />
          </Routes>
        </Container>
      </main>
    </Router>
  </>
  );
}

export default App;
