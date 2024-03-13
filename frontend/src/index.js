import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css'; 
import './assets/styles/bootstrap.custom.css'
import {createBrowserRouter , Route , createRoutesFromElements, RouterProvider} from 'react-router-dom'
import App from './App';
import {Provider} from 'react-redux'
import store from './store';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App></App>}> 

    <Route index={true} path='/' element={<HomeScreen/>}/>

    <Route path='/products/:id' element={<ProductScreen/>}/>

    <Route path='/cart' element={<CartScreen/>}/> 
    <Route path='/login' element={<LoginScreen/>}/> 


    

    </Route>

  

  
    
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
  </React.StrictMode>
);

reportWebVitals();
