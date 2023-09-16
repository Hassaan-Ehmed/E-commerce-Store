import React from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ContextProvider } from './context/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import RouteProtection from './utils/RouteProtection';

function App() {
  return (
    <>

<Router>
 <ContextProvider>
 
<Routes>

  <Route path='/' element={<RouteProtection><Home/></RouteProtection>}/>
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/Login' element={<Login/>}/>
</Routes>
  

    </ContextProvider>
</Router>

    </>
  );
}

export default App;
