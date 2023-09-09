import React from 'react'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { ContextProvider } from './context/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './pages/Signup';

function App() {
  return (
    <>

<Router>
 <ContextProvider>
 
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/Cart' element={<Cart/>}/>
  <Route  path='/SignUp' element={<SignUp/>}/>
</Routes>
  


    </ContextProvider>
</Router>

    </>
  );
}

export default App;
