import React from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ContextProvider } from './context/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import RouteProtection from './utils/RouteProtection';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Grocery from './pages/Grocery';
import Electronics from './pages/Electronics';
import Error from './pages/Error';

function App() {
  return (
    <>

<Router>
 <ContextProvider>
 
<Routes>

  <Route path='/' element={<RouteProtection><Home/></RouteProtection>}/>
  <Route path='/Cart' element={<RouteProtection><Cart/></RouteProtection>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Grocery' element={<RouteProtection><Grocery/></RouteProtection>}/>
<Route path='/Electronics' element={<RouteProtection><Electronics/></RouteProtection>}/>
<Route path='*' element={<Error/>}/>

</Routes>
  

    </ContextProvider>
</Router>

    </>
  );
}

export default App;
