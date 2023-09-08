import React from 'react'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { ContextProvider } from './context/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>

<Router>
 <ContextProvider>

<Navbar/>


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Cart' element={<Cart/>}/>
</Routes>
  

    </ContextProvider>
</Router>

    </>
  );
}

export default App;
