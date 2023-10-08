import React from 'react'
import logo from "../../assets/Logo originalmarron-jl.png"
import { BsXLg } from "react-icons/bs";
import AsideCart from './asideCart';
import { FaShoppingCart } from 'react-icons/fa';
import {  useSelector } from 'react-redux';
import { appState } from '../../../types/appState';
import ButtomComponent from '../buttom/ButtomComponent';
import IconsContainer from '../iconsWraper/IconsContainer';
import { useHandleProduct } from '../../../hooks/handleProduct';


interface props {
  setShowUser: React.Dispatch<React.SetStateAction<boolean>>
  showUser: boolean
}


const AsideUser = ({ setShowUser, showUser }: props) => {

  const data = useSelector((state: appState) => state.appReducer.cartReducer.cart)
  const {navigate,deleteProduct,updateQuatity} = useHandleProduct()
  
  return (
    <aside className={` bg-rosa z-20 absolute top-0 right-0 w-5/6 md:w-2/4 h-screen p-2   ${showUser ? "flex flex-col justify-between" : "hidden"}`}>
      <header className='flex w-full items-center justify-between '>
      <img src={logo} className='w-16 h-16 rounded-full md:w-12 md:h-12' alt="logo" />
    
        <IconsContainer icon={BsXLg} size={30} onClick={() => setShowUser(!showUser)} />
      </header>
      <section className='w-full h-4/5 overflow-y-auto'>
        <section className='flex items-center justify-between my-2 bg-rosa-oscuro-2 rounded-lg text-rosa-claro'>
          <h3 className='text-center p-2 uppercase text-xl md:text-2xl'>detalle de carrito</h3>
          <section className='rounded-full p-2 flex items-center justify-center'>
            <IconsContainer icon={FaShoppingCart} size={30} onClick={() => { }} />
          </section>
        </section>
        <section className='flex flex-col space-y-4'>
          {
            data.map((product) => {
              return (
                <AsideCart deleteProduct={deleteProduct} updateQuatity={updateQuatity} key={product.id} product={product} />
              )
            })
          }
        </section>
      </section>
      <footer className='p-2 flex items-center w-full space-x-2'>
        <header className='bg-rosa-oscuro-2 text-rosa-claro flex flex-col items-center justify-center rounded-md h-12 w-1/2  '>
          <h3 className='uppercase'>Total</h3>
          <p className='text-lg'>{
            data.reduce((result, current) => {
              return result + (current.price * current.quantity)
            }, 0).toLocaleString("es-AR", { style: "currency", currency: "ARS" })
          }</p>
        </header>
        <ButtomComponent name='confirmar compra' onClick={() => {
          navigate("/confirmar")
          setShowUser(!showUser)
        }} className=' uppercase flex flex-col items-center justify-center rounded-md bg-marron-oscuro text-rosa h-12 w-1/2' />
      </footer>

    </aside>
  )
}

export default AsideUser