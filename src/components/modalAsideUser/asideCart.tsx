import { useEffect } from 'react'
import { BsFillXCircleFill } from "react-icons/bs"
import { BsPlusLg } from "react-icons/bs"
import { BsDashLg } from "react-icons/bs";
import { useHandleQuantity } from '../../../hooks/handleQuantity';
import { ProductAdded } from '../../../types/productAdded';
import IconsContainer from '../iconsWraper/IconsContainer';


interface props {
    product: ProductAdded
    deleteProduct: (product: ProductAdded) => void
    updateQuatity: (id: number, quantity: number) => void
}

const AsideCart = ({ product, deleteProduct, updateQuatity }: props) => {

    const [numberCart, handleNumberCart] = useHandleQuantity(product.quantity)

    useEffect(() => {
        updateQuatity(product.id, numberCart)
    }, [numberCart])


    return (
        <article key={product.id} className=' bg-rosa-oscuro text-rosa-claro rounded-xl p-2 grid grid-cols-4 grid-rows-2 px-1 md:grid-rows-3'>
            <img src={product.pictureProduct} alt="logo" className='w-full h-full  rounded-lg col-span-1 row-span-2 md:row-span-3 ' />
            <header className='col-start-2 col-span-3 px-1 flex items-center justify-between w-full' >
                <h2 className='text-lg uppercase md:text-xl'>{product.name}</h2>
                <IconsContainer icon={BsFillXCircleFill} size={30} onClick={() => deleteProduct({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    quantity: numberCart,
                    price: product.price,
                    pictureProduct: product.pictureProduct
                })} />
            </header>
            <section className='row-start-2 md:row-start-3 col-start-2 col-span-3 pl-1 flex items-center w-full' >
                <section className='flex justity-center items-center w-1/2  space-x-1'>
                    <IconsContainer icon={BsDashLg} size={20} onClick={() => {
                        handleNumberCart(-1)
                    }}
                    className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-marron-oscuro flex items-center justify-center " />

                    <p className=' text-lg w-8  md:w-12 text-center md:text-2xl'>{numberCart}</p>
                    <IconsContainer icon={BsPlusLg} size={20} onClick={() => {
                        handleNumberCart(1)
                    }}
                        className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-marron-oscuro flex items-center justify-center  " />
                </section>
                <p className='pl-1 w-1/2 text-lg md:text-2xl'>{product.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</p>
            </section>
        </article>
    )
}

export default AsideCart