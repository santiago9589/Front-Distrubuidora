import  { useState,useEffect } from 'react'
import { GiTwoCoins } from "react-icons/gi"
import { BsCash } from "react-icons/bs"
import LiProductsCartList from '../src/components/liProductCartList/LiProductsCartList'
import { appState } from '../types/appState'
import { useSelector } from 'react-redux'
import ModalComprador from '../src/components/modalDatosComprador/modalComprador'
import ButtomComponent from '../src/components/buttom/ButtomComponent'
import { useHandleProduct } from '../hooks/handleProduct'


const ConfirmacionCompra = () => {

    const data = useSelector((state: appState) => state.appReducer.cartReducer.cart)
    const [show, setShow] = useState<boolean>(false)
    const {navigate,updateQuatity,deleteProduct} = useHandleProduct()
   
      useEffect(()=>{
       data.length<=0 ? navigate("/") : null
      },[data.length])

    
    return (
        <section className='col-span-4 row-span-5 grid-cols-1 grid grid-rows-4'>
            <ul className='col-span-1 row-span-3 w-full overflow-y-auto flex flex-col justify-start space-y-3 lg:space-y-8 lg:grid lg:grid-cols-2'>
                {
                    data.map((product) => {
                        return (
                            <LiProductsCartList key={product.id} product={product} updateQuatity={updateQuatity} deleteProduct={deleteProduct} />
                        )
                    })
                }
            </ul>
            <section className='col-span-1 row-start-4 mt-2 p-2 grid grid-cols-1 grid-rows-2'>
            <div className={`${show ? "opacity-20 bg-negro block absolute z-10 top-0 left-0 w-screen h-screen" : "hidden"}`}/>
                <header className='col-span-1 row-span-1 flex flex-col items-center'>
                    <section className='flex items-center justify-center space-x-1'>
                        <h3 className='text-lg uppercase md:text-3xl'>precio total</h3>
                        <GiTwoCoins size={30} />
                    </section>
                    <section className='flex items-center justify-center space-x-1'>
                        <p className='text-lg md:text-3xl'>{data.reduce((result, current) => {
                            return result + (current.price * current.quantity)
                        }, 0).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
                        <BsCash size={30} />
                    </section>
                </header>
                <section className='col-span-1 row-span-1 flex space-x-5 box-border items-center lg:mt-8'>
                    <ButtomComponent name="ver productos" onClick={() => navigate("/productos")} className='w-1/2 bg-rosa-oscuro text-rosa-claro border-[0.2px] mx-auto rounded-lg p-2 mt-2 uppercase text-lg md:text-2xl '/>
                    <ButtomComponent name="confirmar" disabled={data.length === 0} onClick={() => setShow(!show)} className={` disabled:bg-beige disabled:  w-1/2  bg-marron-oscuro text-rosa border-[0.2px] mx-auto rounded-lg p-2 mt-2 uppercase text-lg md:text-2xl`}/>   
                </section>
            </section>
            <ModalComprador setShow={setShow} show={show} />             
        </section>
    )
}

export default ConfirmacionCompra


