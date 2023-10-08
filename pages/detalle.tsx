import { useHandleQuantity } from '../hooks/handleQuantity'
import { BsDashLg, BsPlusLg } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { appState } from '../types/appState'
import { useEffect } from "react"
import { useHandleProduct } from "../hooks/handleProduct"
import { BiSolidCartAdd } from "react-icons/bi"
import ButtomComponentIconColor from "../src/components/buttom/ButtomComponentIconColor"
import FooterComponent from '../src/components/footer/FooterComponent'

const DetalleProductos = () => {

    const [numberCart, handleNumberCart] = useHandleQuantity(0)
    const data = useSelector((state: appState) => state.appReducer.productReducer.productSelected)
    const { addProduct, navigate } = useHandleProduct()

    useEffect(() => {
        data.name === "" ? navigate("/") : null
    }, [])

    return (
        <section className="col-span-4 row-span-5 w-full overflow-y-auto p-6">
            <section className="col-span-4 row-span-5 w-full md:h-3/4 md:flex">
                <article className="md:h-full w-80 lg:w-[450px] mx-auto">
                    <img className="w-full h-full" alt="foto" src={data.pictureProduct} />
                </article>
                <section className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <header className="border-b border-gray-200 pb-6">
                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">{data.name}</p>
                        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{data.name}</h1>
                    </header>
                    <section className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Precio</p>
                        <article className="flex items-center justify-center">
                            <p className="text-lg leading-none  text-marron-oscuro font-bold">{data.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })} </p>
                        </article>
                    </section>

                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{data.description}</p>

                    <footer className="w-full flex flex-col items-center space-y-4 pt-2">
                        <section className='flex items-center justify-center w-full space-x-1'>
                            <BsDashLg size={10} onClick={() => handleNumberCart(-1)} className="w-5 h-5  rounded-full " />
                            <p className=' text-xl text-marron w-10 text-center'>{numberCart}</p>
                            <BsPlusLg size={10} onClick={() => handleNumberCart(1)} className="w-5 h-5  rounded-full " />
                        </section>
                        <ButtomComponentIconColor classNameColor="bg-marron-oscuro rounded-lg lg:w-[200px] lg:flex lg:items-center lg:justify-center" icon={BiSolidCartAdd} onClick={() => {
                            addProduct({
                                id: data.id,
                                description: data.description,
                                name: data.name,
                                pictureProduct: data.pictureProduct,
                                price: data.price,
                                quantity: numberCart
                            }, numberCart > 0)
                        }}
                            name='AGREGAR'
                        />
                    </footer>
                </section>

            </section>
            <FooterComponent />

        </section>

    )
}

export default DetalleProductos

