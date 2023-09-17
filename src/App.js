import React from 'react'
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ContextProvider } from './context/store';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import RouteProtection from './utils/RouteProtection';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <>

<Router>
 <ContextProvider>
 
<Routes>

  <Route path='/' element={<RouteProtection><Home/></RouteProtection>}/>
  <Route path='/Cart' element={<Cart/>}/>
<Route path='/SignUp' element={<SignUp/>}/>
<Route path='/Login' element={<Login/>}/>

</Routes>
  

    </ContextProvider>
</Router>

    </>
  );
}

export default App;
