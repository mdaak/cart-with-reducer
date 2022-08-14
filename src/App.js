import {
  BrowserRouter, Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Hader from './components/Hader';
import Home from './components/Home';

function App() {
  return (<>
    <BrowserRouter>
      <Hader />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
