import React from 'react'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import { ContextProvider } from './context/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>

  

<Router>
 <ContextProvider>
 
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/Cart' element={<Cart/>}/>
  <Route  path='/SignUp' element={<SignUp/>}/>
  <Route path='/Login' element={<Login/>}/>
</Routes>
  


    </ContextProvider>
</Router>

    </>
  );
}

export default App;
