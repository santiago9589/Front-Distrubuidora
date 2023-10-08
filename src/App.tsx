import './App.css'
import Home from '../pages/home'
import { Route, Switch } from "wouter";
import Products from '../pages/products';
import HeaderComponent from "../src/components/header/HeaderComponent"
import DetalleProductos from "../pages/detalle"
import ConfirmacionCompra from '../pages/confirmacion';
import ContactanosPage from '../pages/contactanos';
import ErrorPage from "../pages/ErrorPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <main className='grid grid-rows-6 grid-cols-4 h-screen grid-auto-rows '>
      <HeaderComponent />
      <Switch>
        <Route path="/productos" component={Products}></Route>
        <Route path="/contactanos" component={ContactanosPage}></Route>
        <Route path="/" component={Home}></Route>
        <Route path='/detalle/:id' component={DetalleProductos}></Route>
        <Route path='/confirmar' component={ConfirmacionCompra}></Route>
        <Route><ErrorPage /></Route>
      </Switch>
      <ToastContainer 
      autoClose={2000}
      position="top-right"
      limit={3}
      />
    </main>


  )
}

export default App