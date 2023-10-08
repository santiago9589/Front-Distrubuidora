import React from 'react'
import SumarRestarBotones from '../sumasrestarBotones.tsx/SumarRestarBotones'
import { Product } from '../../../types/product'
import { ProductAdded } from '../../../types/productAdded'


interface props {
    children: React.ReactNode
    product: Product | ProductAdded
    handleNumberCart: (valueAdded: number) => void
    numberCart: number
}

const LiProductsComponent = ({ product, handleNumberCart, numberCart, children }: props) => {


    return (
        <article className=" w-full h-[530px] border-2 border-marron-oscuro mx-auto max-w-sm bg-marron-oscuro text-rosa rounded-lg shadow-2xl P-2 ">
            <img className=" rounded-t-lg w-full h-2/3" src={product.pictureProduct} alt="product image" />
            <section className="px-3 pt-1 flex flex-col space-y-3 h-[170px]">
                <h5 className="text-xl font-semibold tracking-tight uppercase w-full">{product.name}</h5>
                <section className='flex flex-col justify-between space-y-2 h-full'>
                    <section className='w-full flex justify-between items-center '>
                        <span className="text-2xl font-bold text-rosa-oscuro-2">{product.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</span>
                        <SumarRestarBotones handleNumberCart={handleNumberCart} numberCart={numberCart} />
                    </section>
                    <section className='flex justify-between items-center space-x-1'>
                        {
                            children
                        }
                    </section>
                </section>

            </section>
        </article>
    )
}

export default LiProductsComponent